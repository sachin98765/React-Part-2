import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <h1>Coding World</h1>
      <div className="flex space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
