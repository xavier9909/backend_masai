import {useRef, useState } from "react"

export const Form = ()=>{
    const [form,setform] =useState (null)
     const ref = useRef(null)
    const hndle = (e)=>{
        console.log(ref.current.files);
        const {name,value}  =e.target

        setform({
            ...form,
            [name]:value
        })

    }
    console.log(form);
    const handle = (e)=>{
e.preventDefault()

    }
return <form  onSubmit={handle}>
<input onChange={hndle} type="text" placeholder="kuch toh daal" name="uname"/>
<input onChange={hndle} type="text" placeholder="idhar bhi daal" name="age" />
<input ref={ref} type="file" onChange={hndle} />
<input type="submit" />


</form>
}