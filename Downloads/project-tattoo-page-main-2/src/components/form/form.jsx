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
						Vezetéknév
					</label>
					<input
						className="form__input"
						type="text"
						id="vezeteknev"
						placeholder="Vezetéknév"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="Keresztnev">
						Keresztnév
					</label>
					<input
						type="text"
						name=""
						id="Keresztnév"
						className="form__input"
						placeholder="Keresztnév"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="email">
						E-mail
					</label>
					<input
						type="email"
						id="email"
						className="form__input"
						placeholder="E-mail"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="Jelszó">
						Jelszó
					</label>
					<input
						className="form__input"
						type="password"
						id="Jelszó"
						placeholder="Jelszó"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-container ">
					<label className="form__label" htmlFor="jelszo megerositese">
						Jelszó megerősítése
					</label>
					<input
						className="form__input"
						type="password"
						id="Jelszó megerősítése"
						placeholder="Jelszó megerősítése"
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
			</div>
			<div className="footer">
				<button type="submit" className="button" onClick={() => handleSubmit()}>
					Regisztrálok
				</button>
			</div>
		</div>
	);
}
export default Form;
