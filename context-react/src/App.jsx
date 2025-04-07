import React, {useState} from "react"
import linkContext from "./context/link"
import Navbar from "./components/Navbar"
import Count from "./components/Count"


const App =() =>{
  const[count,setCount]=useState(0)
  const menu=["home","about","services"]

  return (
    <linkContext.Provider value={{menu,count,setCount}}>
    <div>
        <Navbar/>
        <Count/>
    </div>
    </linkContext.Provider>
  )
}

export default App
