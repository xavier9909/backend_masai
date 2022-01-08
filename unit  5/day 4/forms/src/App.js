// import logo from './logo.svg';
import './App.css';
import { useState,useRef } from 'react';
import { Form } from "./components/form"
function App() {

  // rerender but not lose value  example 
//   const test = useRef(1)
//   const [,setD] = useState(1)
//   console.log("ReRendered - " , test);
 return (

//     <div className="App">
//      <button onClick={()=>{
//        test.current = test.current +1
//        console.log(test)
//      }} >Click Me</button>
// <button onClick={()=>{
//   setD((p)=>p+1)
// }}>render</button>
//     </div>
//   );
<>
  <Form/>
</>
 )}

export default App;

