import { useState } from "react"

export const TodoItem =({title,status,id,Toggle})=>{
   console.log({title},id)
   var  [buttonText, setButtonText] = useState("Mark Done")
   
    return<>
        <div>{title} - {status ? "Done": "Not Done"}</div>
        <button onClick={()=>setButtonText("Done")}>{buttonText}</button>
    </>
}


