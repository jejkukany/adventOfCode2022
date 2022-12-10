import React from "react";
import { useContext } from "react";
import { MainContextValue } from "../context/MainContext";
import { MainContextProvider } from "../context/MainContext";
import Loading from "./Loading";
export default function Question(){
	const { answer, question, userInput, questionCount, loading} = MainContextValue()
    const [answerValue, setAnswerValue] = answer
    const [questionValue, setQuestionValue] = question
    const [userInputValue, setUserInputValue] = userInput
    const [questionCountValue, setQuestionCountValue] = questionCount
    const [loadingValue, setLoadingValue] = loading

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
        <MainContextProvider  value={{ answer, question, userInput: [userInputValue, setUserInputValue],questionCount, loading}} >
			{ loadingValue === true && <Loading/>}
			<div className="absolute  w-[95%] top-1/2 left-1/2 ml-[-47.5%] mt-[-113px] ">
				<div className={loadingValue === true ? "hidden": ""}>
					<h1 className="text-center text-4xl">{questionValue}</h1>
					<form className="text-center mt-10" onSubmit={handleSubmit}>
						<input id="answer" type="text" value={userInputValue} autoComplete="off" className="outline outline-2 rounded-md outline-indigo-500 w-[100%] p-[2.5px] text-xl"onChange={(e) => setUserInputValue(e.target.value)}></input>
					</form>
				</div>
			</div >
        </MainContextProvider>

	);
}
