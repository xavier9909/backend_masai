
import { Link, useParams } from "react-router-dom"

import { useState ,useEffect} from "react"


export const Applyjob=()=>{

    
   
   const {id}=useParams()
    const [item,setItem]=useState({})
    const [applicant,setApplicant]=useState("");
    const [des,setDes]=useState("");
    const [status,setStatus]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3001/jobs/${id}`).then(d=>d.json()).then(d=>{setItem(d)})
 
        },[id])

return <>
    <h1>Apply job</h1>
    <div>
    <div ><button><Link to={"/"} >Home</Link></button></div>
    
         <div style={{border:"2px solid"}}>
            
           <p> <input type="text" placeholder="name" name="applicant" value={applicant} onChange={(e)=>{setApplicant(e.target.value)}} /></p> 

           
           <button
           
           onClick={()=>{
console.log(item,"me")
           fetch(`http://localhost:3001/jobs/${id}`,{

               method:"PUT",
               body:JSON.stringify({
                   title:item.title,
                   salary:item.salary,
                   description:item.description,
                   type:item.type,
                   location:item.location,
                   name:item.name

                 ,
      


                   applicants:[...item.applicants,applicant],

               }),
               headers:{
                   "Content-Type":"application/json"
               }

            }).then(d=>d.json()).then((res)=>{console.log(res)})

            setApplicant("");alert("Applied successfully")
           
           
           }

           }
           
           >Apply</button>
         
            
         </div>
    


    </div>


</>



}