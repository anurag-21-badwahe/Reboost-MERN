import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>Another Component count is at {count}</div>
  )
}

export default Counter