import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
	GET_USERS_FETCH,
	GET_USERS_SUCCESS
} from '../features/users/usersActions'

function usersFetch() {
	return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
		response.json()
	)
}

function* workGetUsersFetch() {
	const users = yield call(usersFetch)
	yield put({ type: GET_USERS_SUCCESS, users })
}

function* mySaga() {
	yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
}

export function* mySagaLatest() {
	yield takeLatest(GET_USERS_FETCH, workGetUsersFetch)
}

export default mySaga
