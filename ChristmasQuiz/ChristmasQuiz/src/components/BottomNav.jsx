import React from "react";
import {useState, useEffect } from "react";
import {FaCheck, FaArrowLeft} from "react-icons/fa"
import { MainContextValue, MainContextProvider } from "../context/MainContext";
import data from "../data";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";


export default function BottomNav(){
    const { answer, question, userInput, questionCount, loading} = MainContextValue()
    const [questionValue, setQuestionValue] = question
    const [answerValue, setAnswerValue] = answer
    const [userInputValue, setUserInputValue] = userInput
    const [questionCountValue, setQuestionCountValue] = questionCount
    const [loadingValue, setLoadingValue] = loading
    const [questionsArr, setQuestionsArr] = useState([])

    const {user} = UserAuth()

    useEffect(() => {
        setLoadingValue(true)
        const q = query(collection(db, 'users'))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let questionArr = []
            QuerySnapshot.forEach((doc) => {
                questionArr.push({...doc.data(), id: doc.id})
            })
            
            const getUserSpecificData = () => {for (let i = 0; i < questionArr.length; i++) {
                if (questionArr[i].id === user.uid) {return i}
            }}
            setQuestionsArr(questionArr[getUserSpecificData()])
            setQuestionValue(questionArr[getUserSpecificData()][`${questionCountValue}q`])
            setAnswerValue(questionArr[getUserSpecificData()][`${questionCountValue}a`])
            setLoadingValue(false) 
        })
        return () => {unsubscribe()}
    }, [user]);
    const onClickCheck = () => {
        if (userInputValue === answerValue) {
            setQuestionCountValue(() => questionCountValue + 1)
            setUserInputValue("")
            setQuestionValue(() => questionsArr[`${questionCountValue + 1}q`])
            setAnswerValue(() => questionsArr[`${questionCountValue + 1}a`])
        }
    }
    const onClickPrevious = () => {
        setQuestionCountValue(()  => questionCountValue - 1)
        setUserInputValue("")
        setQuestionValue(() => data[questionCountValue].question)
        setAnswerValue(() => data[questionCountValue].answer)
    }
    return(
        
        <MainContextProvider value={{ answer: [answerValue, setAnswerValue], question: [questionValue, setQuestionValue], userInput, questionCount: [questionCountValue, setQuestionCountValue], loading: [loadingValue, setLoadingValue]}}>
            <div className="fixed bottom-2.5 left-2.5 right-2.5 p-[20px] pb-[12px] bg-indigo-500 rounded-[25px] text-xl">
                <div className="flex flex-row text-lg text-indigo-50">
                    <span className="text-left basis-1/3 " onClick={onClickPrevious}><FaArrowLeft size={28}/></span>
                    <span className="text-center basis-1/3 ">{`${questionCountValue}/5  `}</span>
                    <span className="text-right basis-1/3 "><button className=" rounded text-white p-0 text-xl" onClick={onClickCheck}><FaCheck size={28}/></button></span>
                </div>
            </div>
        </MainContextProvider>
    )
}