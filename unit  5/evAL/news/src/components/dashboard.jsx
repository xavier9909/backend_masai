import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getJobSuccess } from "../features/app/action";


export const Admin=()=>{
    const dispatch=useDispatch()
    const {loading,jobs,error}=useSelector(state=> ({loading:state.app.loading, jobs:state.app.jobs,error:state.app.loading }));
  
   
   

    
    

    useEffect(() => {
       
        getdata();
         
    }, [])


    const getdata= async()=>{
            
        try{
            const  data=await fetch("http://localhost:3001/jobs").then((d)=>d.json())
            
            dispatch(getJobSuccess(data))
           
            console.log(data)
        }
       catch(err){console.log(err)}
    };
  
    
  return <>
  <h1>Only Admins from regres</h1>
      <div>
        {jobs.map(e=><div ><p>{e.title}
        <h4>applicants</h4>
      <ul>
         { e.applicants.map(ap=><li>{ap}</li>)}
      </ul>
        
        </p></div>)}


        </div>
     </>
}