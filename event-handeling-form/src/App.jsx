// import React from 'react'
// import { useState } from 'react'



// const App = () => {
//   const [count, setCount] = useState(0)

//   const increase=() => {
//     setCount(count+1)
//   }
  
//   const decrease=() => {
//     setCount(count-1)
//   }
  
//   const reset=() => {
//     setCount(0)
//   } 
  

//   return (
//     <div className='bg-blue-950 text-white h-screen flex flex-col items-center justify-center'>
//       <div className='mb-8'>
//         <h1 className='text-3xl font-semibold'> {count} </h1>
//       </div>
//       <div>
//         <button className='bg-blue-400 px-8 py-2 rounded-lg ml-4' onClick={increase}>+</button>
//         <button className='bg-blue-400 px-8 py-2 rounded-lg ml-4' onMouseEnter={decrease}>-</button>
//         <button className='bg-blue-400 px-8 py-2 rounded-lg ml-4' onMouseLeave={reset}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default App

/*----------Form Handling------*/
import React from 'react'
import { useState } from 'react'


const App = () => {
 const [input, setInput]=useState({})
 const handleInput=(e) => {
    let name=e.target.name
    let value=e.target.value
    setInput({...input, [name]:value})
 }

  const handleSubmit=(e) => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className='h-screen flex justify-center items-center bg-lime-950 text-white'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col '>
          <label htmlFor="name">Name</label>
          <input type="text" className='text-black' name='name' onChange={handleInput} value={input.name} />
        </div>
        
        <div className='flex flex-col '>
          <label htmlFor="email">Email</label>
          <input type="text" className='text-black' name='email'  onChange={handleInput} value={input.email} />
        </div>

        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default App
