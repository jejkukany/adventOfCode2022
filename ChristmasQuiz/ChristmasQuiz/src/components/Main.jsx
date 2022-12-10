import React from "react";
import Question from "./Question";
import BottomNav from "./BottomNav";
import End from "./End";
import { MainContextValue } from "../context/MainContext";

export default function Main(){
    const { questionCount} = MainContextValue()
    const [questionCountValue, setQuestionCountValue] = questionCount

    
    return (
        <>
            {questionCountValue > 5 ? <End/> : <><Question/><BottomNav/></>}
        </>
    )
}