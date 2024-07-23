import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { increment, decrement } from '../redux/counterSlice'

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
