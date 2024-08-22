import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
	name: 'users',
	initialState: { value: [] },
	reducers: {
		addUser: (state, action) => {
			return [...state, action.payload]
		},
		removeUser: (state, action) => {
			return state.fillter((s) => s.name === action.payload.name)
		}
	}
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
