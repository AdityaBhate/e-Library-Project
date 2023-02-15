import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logInPostRequest } from "../api/apiClient";
import { useMutation } from "react-query";
import Navbar from "../components/Navbar";

const Auth = () => {
	const navigate = useNavigate();
	//context
	//student state
	const [std_username, std_setUsername] = useState("");
	const [std_password, std_setPassword] = useState("");
	//admin state
	const [adm_username, adm_setUsername] = useState("");
	const [adm_password, adm_setPassword] = useState("");
	//ui state
	const [loginOption, setLoginOption] = useState("Auth-body-Option-std");

	const std_onSubmit = async (e) => {
		e.preventDefault();
		let res = await logInPostRequest(std_username, std_password);

		if (res.Auth === "Success") {
			alert(`Logged In as: ${res.user.role}`);
			navigate("/search");
		} else {
			alert(`Errored Occured during Logging In`);
		}
	};

	const adm_onSubmit = async (e) => {
		e.preventDefault();
		let res = await logInPostRequest(adm_username, adm_password);

		if (res.Auth === "Success") {
			alert(`Logged In as: ${res.user.role}`);
			navigate("/search");
		} else {
			alert(`Errored Occured during Logging In`);
		}
	};

	return (
		<>
			<Navbar />
			<div className='Auth-section'>
				<div className='Auth-header'>
					<p>Log In</p>
				</div>
				<div className='Auth-body'>
					<div className={loginOption}>
						<p
							className='Auth-body-Options-Student'
							onClick={() => setLoginOption("Auth-body-Option-std")}>
							Student
						</p>
						<p
							className='Auth-body-Options-Admin'
							onClick={() => setLoginOption("Auth-body-Option-adm")}>
							Admin
						</p>
					</div>
					{loginOption === "Auth-body-Option-std" ? (
						<div className='Auth-form std'>
							<label>Registration Number: </label>
							<input
								type='text'
								placeholder='College Reg. No.'
								onChange={(e) => std_setUsername(e.target.value)}
							/>
							<label className='auth-form-reg-label'>Password:</label>
							<input
								type='password'
								placeholder='Password'
								onChange={(e) => std_setPassword(e.target.value)}
							/>
							<button type='submit' onClick={(e) => std_onSubmit(e)}>
								Log In
							</button>
						</div>
					) : (
						<div className='Auth-form adm'>
							<label>Emp Id: </label>
							<input
								type='text'
								placeholder='College Emp id'
								onChange={(e) => adm_setUsername(e.target.value)}
							/>
							<label className='auth-form-reg-label'>Password: </label>
							<input
								type='password'
								placeholder='Password'
								onChange={(e) => adm_setPassword(e.target.value)}
							/>
							<button type='submit' onClick={(e) => adm_onSubmit(e)}>
								Log In
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Auth;
