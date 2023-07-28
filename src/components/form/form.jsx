import React from 'react';
import { useState } from 'react';
import './form.css';

function Form() {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'firstName') {
			setFirstName(value);
		}
		if (id === 'lastName') {
			setLastName(value);
		}
		if (id === 'email') {
			setEmail(value);
		}
		if (id === 'password') {
			setPassword(value);
		}
		if (id === 'confirmPassword') {
			setConfirmPassword(value);
		}
	};

	const handleSubmit = () => {
		console.log(firstName, lastName, email, password, confirmPassword);
	};

	return (
		<div className="form">
			<div className="form-body">
				<div className="input-container ">
					<label className="form__label" htmlFor="vezeteknev">
						Vezeteknev
					</label>
					<input
						className="form__input"
						type="text"
						id="vezeteknev"
						placeholder="Vezeteknev"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="Keresztnev">
						Keresztnev
					</label>
					<input
						type="text"
						name=""
						id="Keresztnev"
						className="form__input"
						placeholder="Keresztnev"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="form__input"
						placeholder="Email"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="jelszo">
						jelszo
					</label>
					<input
						className="form__input"
						type="password"
						id="jelszo"
						placeholder="jelszo"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="jelszo megerositese">
						Jelszo megerositese
					</label>
					<input
						className="form__input"
						type="password"
						id="jelszo megerositese"
						placeholder="Jelszo megerositese"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
			</div>
			<div className="footer">
				<button type="submit" className="button" onClick={() => handleSubmit()}>
					Register
				</button>
			</div>
		</div>
	);
}
export default Form;
