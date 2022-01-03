import { Todoinput } from "./todoinput"
import { TodoItem } from "./todoitem";
import { useState } from "react";
export const Todo = (data)=>{
    const [setl,setlist] = useState([])
    const handleclick = (data)=>{
        console.log("parent",data);
       setlist([...setl,data])
    }
    return <>

     <Todoinput getdata= {handleclick}/>

         {setl.map((e)=>(
             <TodoItem title={e} />
         ))}
     
    </>
}