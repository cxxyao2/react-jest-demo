import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from './features/counter/counterSlice'
import myFirstReducer from './features/users/myFirstReducer'
import mySaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ counterReducer, myFirstReducer })

export default configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(mySaga)
