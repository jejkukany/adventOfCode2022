import React from "react"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom'

const Login = () => {
    
    const {user} = UserAuth() 
    if (user){
        return <Navigate to="/home"/>
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate()
    const {logIn} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/home')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    return(
        <>
             <form onSubmit={handleSubmit} className=" flex flex-col absolute h-[300px] w-[320px] top-1/2 left-1/2 ml-[-160px] mt-[-150px]">
                <label className="text-red-600 text-center">{error && error}</label>
                <input className="outline rounded-full outline-2 outline-indigo-500 p-5 my-5" type="email" autoComplete="current-password" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input className="outline rounded-full outline-2 outline-indigo-500 p-5 my-5" type="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button className="w-[100%] bg-indigo-500 p-5 rounded-xl text-white">Log in</button>
             </form>
        </>
    )
}
export default Login