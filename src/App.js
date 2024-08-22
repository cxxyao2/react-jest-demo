import PasswordForm from './features/auth/PasswordForm'
import './App.css'
import { Counter } from './features/counter/Counter'
import UserList from './features/users/UserList'

function App() {
	const onSubmit = (e) => {
		console.log('form data is ', e)
	}
	return (
		<>
			<h2>login</h2>
			{/* <PasswordForm onSubmit={onSubmit} />
			<div style={{ border: 2 }}></div>
			<Counter /> */}
			<UserList />
		</>
	)
}

export default App
