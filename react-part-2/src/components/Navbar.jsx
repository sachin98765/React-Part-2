import React from "react"

import navbar from "./css/Navbar.module.css"

const Navbar = ({yourLink,Link1,Link2,Link3,Link4}) => {
  return (
    <div className="flex flex-row justify-between p-4 bg-gray-200" >
      <h1>Coding Navbar</h1>
      <ul>
        <li >{Link1}</li>
        <li >{Link2}</li>
        <li>{Link3}</li>
        <li >{Link4}</li>
        <li>{yourLink}</li>
      </ul>
    </div>
  )
}

export default Navbar
