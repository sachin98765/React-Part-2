import React from 'react'
import { useContext } from 'react'
import linkContext from '../context/link'

const List = () => {
    const {menu} = useContext(linkContext)
  return (
    <div>
      <ul>
        {menu.map((item, i) => <li key={i}> {item} </li>)}
      </ul>
    </div>
  )
}

export default List
