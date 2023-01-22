import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
	const navigate = useNavigate();
	const [loginOption, setLoginOption] = useState("Auth-body-Option-std");

	return (
		<>
			<div className='Auth-navbar'>
				<p onClick={() => navigate("/")}>&#9735; Back</p>
			</div>
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
							<label>College Email Id: </label>
							<input type='email' placeholder='College Email id' />
							<label className='auth-form-reg-label'>
								Registration Number:{" "}
							</label>
							<input type='text' placeholder='Registration No. ' />
							<button type='submit'>Log In</button>
						</div>
					) : (
						<div className='Auth-form adm'>
							<label>Emp Mail Id: </label>
							<input type='email' placeholder='College Email id' />
							<label className='auth-form-reg-label'>Emp Number: </label>
							<input type='text' placeholder='Registration No. ' />
							<button type='submit'>Log In</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Auth;
