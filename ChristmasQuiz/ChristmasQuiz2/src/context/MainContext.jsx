import { createContext, useContext, useEffect, useState } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const [questionCount, setQuestionCount] = useState(1)
    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState("")
    const [userInput, setUserInput] = useState("")
    const [loading, setLoading] = useState(false)
	return (
		<MainContext.Provider value={{ answer: [answer, setAnswer], question: [question, setQuestion], userInput : [userInput, setUserInput], questionCount: [questionCount, setQuestionCount], loading: [loading, setLoading]}}>{children}</MainContext.Provider>
	);
};

export const MainContextValue = () => {
	return useContext(MainContext);
};
