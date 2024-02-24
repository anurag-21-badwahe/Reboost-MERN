import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,multiply} from './redux/counter/counterSlice'
import Counter from './assets/component/Counter'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
    <p>Our counter is at</p>
     <button  onClick={() => dispatch(decrement())}>Dec</button>
     {count}
     <button onClick={() => dispatch(increment())}>Inc</button>
     <button onClick={() => dispatch(multiply())}>Mux*2</button>
     <Counter/>
    </>
  )
}

export default App
