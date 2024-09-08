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

  const Reset = () =>{
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

  const DecreaseValue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log("The rank is decreased to: ",{counter})
  }


  return (
    // <> //This is fragment tag used when we are not using div tag as right now we are using div we can avoid so commented.
      <div className="mybody">
        <h1 style={{color:"green", fontFamily:"cursive"}}>Hi, I am Dipankar Mandal and my rank is : {counter}</h1>
        <h1 style={{color:"red", fontFamily:"cursive"}}>{status}</h1>
        <button class = "btn" onClick={AddValue}>Add </button>
        <button class = "btn" onClick={DecreaseValue}>Decrease </button>
        <br/>

        <button class = "btn" onClick={Reset}>Reset </button>
      </div >
    // </>
  );
}
