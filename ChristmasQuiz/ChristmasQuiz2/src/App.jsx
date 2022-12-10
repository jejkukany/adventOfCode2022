import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { MainContextProvider } from "./context/MainContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
	return (
		<div >
			<AuthContextProvider>
				<Nav />
				<Routes path="/">
					<Route path="/" element={<Login />} />
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<MainContextProvider>
									<Main />
								</MainContextProvider>
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
}
