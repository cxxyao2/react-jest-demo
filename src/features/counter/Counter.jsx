import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

export function Counter() {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<span>{count}</span>
			<button onClick={() => dispatch(decrement())}>Dncrement</button>
			<button onClick={() => dispatch(incrementByAmount(2))}>AddBy2</button>
		</div>
	)
}
