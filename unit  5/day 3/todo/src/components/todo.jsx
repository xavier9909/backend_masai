import { Todoinput } from "./todoinput"


export const Todo = ()=>{
    const handleclick = (data)=>{
        console.log("parent",data);
       
    }
    return <>
     <Todoinput getdata= {handleclick}/>
    </>
}