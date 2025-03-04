import './App.css'
import Watch from './Component/Watch/Watch'




function App() {
  const Watches=[
    {id:1, name:"Walton",price:"2000"},
    {id:2, name:"Walton",price:"2000"},
    {id:3, name:"Walton",price:"2000"},
    
  ]
  
  return (
    <>
      
      <h1> React Part Start1</h1>
      {
        Watches.map(watch=><Watch key={watch.id} item={watch}></Watch>)

      }
      
      </>
  )
}

export default App
