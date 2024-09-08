import { useState } from "react"
import './App.css';



export default function App() {

  let [counter, setCounter] = useState(0)
  let [status, setStatus] = useState("")

  const AddValue = () => {
    counter = counter+1
    status = ""
    setStatus(setStatus)
    setCounter(counter)
    console.log("Dipankar's rank is : ",counter,"|",Math.random())
  }

  const RemoveValue = () =>{
    if (counter > 0)
    {
      counter = 0
      setCounter(counter)
      console.log("Dipankar's rank is set to: ",{counter})
    }
    else{
      status = "The rank is already 0."
      setStatus(status)
      console.log("The rank is already 0.")
    }

  }

  return (
    <>
      <div className="App">
        <h1 style={{color:"green", fontFamily:"cursive"}}>Hi, I am Dipankar Mandal and my rank is : {counter}</h1>
        <h1 style={{color:"red", fontFamily:"cursive"}}>{status}</h1>
        <button onClick={AddValue}>AddValue {counter} </button>
        <br/>
        <br/>
        <br/>
        <button onClick={RemoveValue}>RemoveValue</button>
      </div >

    </>
  );
}
