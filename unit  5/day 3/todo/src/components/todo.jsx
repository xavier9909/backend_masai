import { Todoinput } from "./todoinput"
import { TodoItem } from "./todoitem";
import { useState } from "react";
import { nanoid } from 'nanoid'
export const Todo = (data)=>{
    const [setl,setlist] = useState([])
    const handleclick = (data)=>{
        console.log("parent",data);
        var payload = {
            title : data,
            status : false,
            id : nanoid(7)
        }
       setlist([...setl,payload])
   
    }
    var Toggle=(id)=>{
      
    }

    
    return <>

     <Todoinput getdata= {handleclick}/>

         {setl.map((e,i)=>(
             <TodoItem key={i} title={e.title} status={e.status}  id={e.id} Toggle={Toggle}/>
         ))}
     
    </>
}