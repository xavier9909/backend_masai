import { useState } from "react"
export const Todoinput = ({getdata}) =>{
    const [text,setTeaxt] = useState("")
const handlechange = (e)=>{
    setTeaxt(e.target.value)

}

const handleclick = ()=>{
getdata(text);
}

return (
<>
<input type="text" placeholder="Enter Input" onChange={handlechange} />
<button onClick={handleclick} >Add Todo</button>

</>

)

}