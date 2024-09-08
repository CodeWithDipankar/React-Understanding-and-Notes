

export default function App() {

  // let ShowDetails = () => {
  //   console.log("Hi i am Dipankar Mandal")
  // }
  // let removeDetails = () => {
  //   console.log("Hi i am Dipankar Mandal2")
  // }

  let counter = 10

  const AddValue = () => {
    console.log("Dipankar's rank is :",counter,"|",Math.random())
    counter++
  }


  return (
    <>
      <center>
        <h1>Hi, I am Dipankar Mandal and my rank is :{counter}</h1>

        <button onClick={AddValue}>AddValue {counter} </button>
        <br/>
        <br/>
        <br/>
        <button>RemoveValue</button>

        {/* <button onClick={ShowDetails}>Show the Details</button>
        <button onClick={removeDetails}>Remove the Details</button> */}
      </center>

    </>
  );
}
