import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Component/Watch/Watch'




function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("watch.json")
    .then(res=>res.json())
    .then(data1=>setData(data1))
  },[])
  
  
  return (
    <>
      
      <h1> React Part Start1</h1>
      {
        data.map(item=><Watch key={item.id} watch_info={item}></Watch>)
      }
      
      
      </>
  )
}

export default App
