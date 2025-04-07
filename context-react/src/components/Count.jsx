import React from 'react'
import { useContext } from 'react'
import linkContext from '../context/link'

const Count = () => {
    const {count,setCount} = useContext(linkContext)
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Count
