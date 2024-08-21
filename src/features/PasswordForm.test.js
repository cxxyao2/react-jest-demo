import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import PasswordForm from './PasswordForm'

it('renders the form with all input fields', () => {
	render(<PasswordForm onSubmit={() => {}} />)

	expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
	expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
	expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
})

it('displays an error if the password is not compliant', () => {
	render(<PasswordForm onSubmit={() => {}} />)

	fireEvent.change(screen.getByLabelText(/password/i), {
		target: { value: 'short!' }
	})

	fireEvent.click(screen.getByText(/submit/i))

	expect(
		screen.getByText(/password must be at least 8 characters long/i)
	).toBeInTheDocument()
})

it('validates that all from form inputs are filled correctly', () => {
	const mockSubmit = jest.fn()
	render(<PasswordForm onSubmit={mockSubmit} />)

	fireEvent.change(screen.getByLabelText(/username/i), {
		target: { value: 'user' }
	})
	fireEvent.change(screen.getByLabelText(/email/i), {
		target: { value: 'user@example.com' }
	})
	fireEvent.change(screen.getByLabelText(/password/i), {
		target: { value: 'User1password!' }
	})
	fireEvent.click(screen.getByText(/submit/i))

	expect(mockSubmit).toHaveBeenCalledWith({
		username: 'user',
		email: 'user@example.com',
		password: 'User1password!'
	})
})
