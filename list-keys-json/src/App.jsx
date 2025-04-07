// import { useState } from 'react'
// import './App.css'

// function App() {
//   const arr = ["Home", "Contact Us", "Services", "About Us","Help","More"]

//   return (
//     <div className='h-screen bg-zinc-900 text-white'>
//       <ul>
//         {arr.map((list, i) => (<div>
//           <li key={i}>{list}</li> 
//           <p>{list}</p> 
//           </div>)
//         )}
        
//       </ul>
    
//     </div>
//   )
// }

// export default App

/*-------------JSON---------------*/

import './App.css'
import students from './Student.js'

function App() {
  

  return (
    <div className='h-screen bg-zinc-900 text-white'>
      <ul>
        {students.map((stud,i)=><li>Name :{stud.name},Roll no:{stud.rollNo}</li>)}
      </ul>
    </div>
  )
}

export default App

