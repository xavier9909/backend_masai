import {add} from './calc'
import("../style.css")
import React from 'react'
import ReactDOM from 'react-dom'
console.log(add(5,4));


// const h1 = document.createElement("h1")
// h1.innerHTML = "hello world"
// h1.classList.add("red")
// document.getElementById("root").appendChild(h1)
ReactDOM.render(
    React.createElement("h1",{className: "red"}, "hello weeeee"),
 document.getElementById("root")
)