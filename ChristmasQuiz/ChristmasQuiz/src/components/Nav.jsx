import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


export default function Nav(){
    const { user, logout} = UserAuth()

    const navigate = useNavigate()
    const handleLogout = async ()  => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }
    return(
        <div className="p-5 text-center text-xl text-indigo-50 bg-indigo-500 flex place-content-between">
            <h1 className="">Christmas Quiz</h1>
            <h1 onClick={handleLogout} className="">{user && "Sign Out"}</h1>
        </div>
    )
}