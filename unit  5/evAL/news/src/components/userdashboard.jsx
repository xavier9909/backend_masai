import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useEffect } from "react";
import { getJobSuccess, sortJob } from "../features/app/action";
import { Link } from "react-router-dom";





export const Userdashboard=()=>{
    const dispatch=useDispatch()
    const [loc,setLoc]=useState("")
    const {loading,jobs,error}=useSelector(state=> ({loading:state.app.loading, jobs:state.app.jobs,error:state.app.loading }));
  
   
   

    
    

    useEffect(() => {
       
        getdata();
         
    }, [])


    const getdata= async()=>{
            
        try{
            const  data=await fetch("http://localhost:3001/jobs").then((d)=>d.json())
            
            dispatch(getJobSuccess(data))
            console.log(data ," here")
        }
       catch(err){console.log(err)}
    };
  
    
  return <>
  <button onClick={()=>{var dta=jobs.sort((a,b)=>{return b.salary-a.salary})
      dispatch(getJobSuccess(dta))
  }}>Sort salary wise</button>

  <div>
    


  </div>
        {jobs.map(e=><div ><p>{e.title}</p>
            <p>{e.name}</p>
            <p>{e.salary}</p>
           <p>
            
            
            <button><Link to={`/apply/${e.id}`} >Apply</Link></button>
            </p>
        
        </div>)}
     </>


}