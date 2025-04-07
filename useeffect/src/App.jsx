import React from 'react'
import { useEffect,useState} from 'react'

const App = () => {
  //useEffect(< call back function>, <[dependency may be optional | variable]>)
  //usecase 1
  // useEffect(() => {
  //  alert("component render and useEffect working")
  // },[])

  //usecase 2
  // useEffect(() => {
  //    alert("component render and useEffect working")
  //   })

  //usecase 3
   const [dependency, setDependency] = useState(0)
  // useEffect(() => {
  //    alert("component render and useEffect working")
  //   },[dependency])

    //usecase 4
    useEffect(() => {
      alert(`Mount is happen ${dependency}`)
      return () => {
        alert(`Unmount happen ${dependency}`)
      }
     },[dependency])
 

  return (
    <div>
      <h1>{dependency}</h1>
      <button onClick={()=>setDependency(dependency+1)}>Increment</button>
    </div>
  )
}

export default App
