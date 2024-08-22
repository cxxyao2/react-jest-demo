import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFetch } from './usersActions'

function UserList() {
	const dispatch = useDispatch()
	const users = useSelector((state) => state.myFirstReducer.users)

	return (
		<div>
			<button onClick={() => dispatch(getUsersFetch())}>Get users</button>
			<div>
				Users:{' '}
				{users.map((user) => (
					<div>{user.name}</div>
				))}
			</div>
		</div>
	)
}

export default UserList
