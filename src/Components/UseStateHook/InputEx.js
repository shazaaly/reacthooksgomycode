import { useState } from "react";
import React from "react";

// this component takes  an input from user to track change in it //
export const InputEx = () => {
   
    const [inputVal, setInputVal] = useState('');

    const inputHandler = (e) =>{
        e.preventDefault();
        setInputVal(e.target.value);
       
    }

  return (
    <div>

        <input type='text' placeholder="Enter text.." onChange={inputHandler}/>
        <br />
        <h3>{inputVal}</h3>
    </div>
  )
}
