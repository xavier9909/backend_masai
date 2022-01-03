//import logo from './logo.svg';
import './App.css';

function App() {
  const handle =(data)=>{console.log("i am parent",data);} 
  const tt = "dfdfdf"
  return (
  
    
    <div className='App'>
      <h1>masai-parent</h1>
      <Child handle={handle} />
      <Child2 C={tt} />
    </div>
  
  );
}


function Child({handle}) {
  const data = "masai"
  handle(data)
  return (
    <div><h1>received : {data}</h1> </div>
   )
}
function Child2({params}) {
 
 return <>hel:{params}</> 
}
export default App;
