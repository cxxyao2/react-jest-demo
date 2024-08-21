import PasswordForm from './features/PasswordForm'
import './App.css'

function App() {
	const onSubmit = (e) => {
		console.log('form data is ', e)
	}
	return (
    <>
      <h2>login</h2>
			<PasswordForm onSubmit={onSubmit} />
		</>
	)
}

export default App
