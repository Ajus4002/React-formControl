import React from "react";
import { useState } from "react";
import '../components/register.css'
function Register(){
    const [name,setname] = useState("");
    const[newText,setNewText]=useState("");

function handleChange(event){
    
   setname(event.target.value)
}
function changeName(event){
event.preventDefault()
setNewText(name)
   
}


    return(


        <div className="container">
        
        <form onSubmit={changeName}>
        <h1>hii {newText}</h1>
        <input onChange={handleChange} value={name} type="text" placeholder="Enter the name"/>
        
        <button type="submit">Submit</button>
        
        
        
        </form>
        
        
        </div>
    )

}
export default Register;