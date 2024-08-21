import React, { useState } from 'react'

const PasswordForm = ({ onSubmit }) => {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [error, setError] = useState('')

	const validatePassword = (password) => {
		const lengthValid = password.length >= 8
		const upperCaseValid = /[A-Z]/.test(password)
		const lowerCaseValid = /[a-z]/.test(password)
		const numberValid = /\d/.test(password)
		const specialCharValid = /[!@#$%^&]/.test(password)

		return (
			lengthValid &&
			upperCaseValid &&
			lowerCaseValid &&
			numberValid &&
			specialCharValid
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!validatePassword(password)) {
			setError(
				'Password must be at least 8 characters long, include uppercase, lowercase, number, special character'
			)
		} else {
			setError('')
			onSubmit({ username, email, password })
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Username:</label>
				<input
					id='name'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor='password'>Password:</label>
				<input
					id='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			{error && <p>{error}</p>}
			<button type='submit'>Submit</button>
		</form>
	)
}

export default PasswordForm
