//import export 
//real dom vs virtual dom
import Navbar from './components/Navbar'
import React from 'react'
import './App.css'
function App (){
  const isFollow = true;
  return (
    <>
      {/* <Navbar/>
      {isFollow ? <p>Already Followed</p> : <p>Not Followed</p>}
      <h1 className='heading'>Follow</h1>
      <h1 className='navbar text-center'>Unfollow</h1>
      <ul>
        <li>Components -- completed</li>
        <li>Css/Tailwind-- completed </li>
        <li>Conditional -- completed </li>
      </ul> */}

      <div>
        <Navbar yourLink={"Help"} Link1={"Home"} Link2={"About"} Link3={"Projects"} Link4={"Courses"} />
        <h1 className='text-3xl' >Code Deploy</h1>
      </div>

    </>
  )
}

export default App
