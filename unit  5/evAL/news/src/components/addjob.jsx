import {useSelector} from "react-redux"
import { useState } from "react";
import { addJobSuccess ,addJobError,addJobLoading,} from "../features/app/action";
import { useDispatch } from "react-redux";


export const Addjobform=()=>{

    const [form,setForm]=useState({});
    const [name,setName]=useState("")
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState('')
    const [salary,setSalary]=useState('')
    const [location,setLocation]=useState('')
    const [type,setType]=useState('')
    const dispatch=useDispatch()
    const {loading,jobs,error}=useSelector(state=> ({loading:state.app.loading, jobs:state.app.jobs,error:state.app.error }));
  
   

  const handleinputchange=({target:{name,value}})=>{

      setForm({
          ...form,
          [name]:value,
          applicants:[]
      })
  }

 

    return loading ? (<div>loading</div>): error? (<div>some is went wrong</div>):(
    
    
    <div className='form' style={{"width":"400px"}}>

    <input type="text" placeholder='Company name'  onChange={handleinputchange} name="name"/>
    <input type="text"  placeholder='Job Title'  onChange={handleinputchange} name="title"/>
    <input type="text"  placeholder='salary'  onChange={handleinputchange} name="salary"/>
    <input type="text"  placeholder='Job location'  onChange={handleinputchange} name="location"/>
    <input type="text"  placeholder='Job Type'  onChange={handleinputchange} name="type"/>
    
    <textarea  placeholder=' Job Description' onChange={handleinputchange} name="description"/>
    <button
    onClick={()=>{

     
      fetch('http://localhost:3001/jobs',{
          method:"POST",
          body:JSON.stringify(form),
          headers:{
              "Content-Type":"application/json"
          }
      }).then(d=>d.json()).then((res)=>{console.log(res); alert("job posted ")}).catch((err)=>{console.log(err)})

      
        
    }}
    
    
    >Add Job</button>
    
   </div>



    )}