import React, { useState } from 'react'

export const Counter = ()=> {

    const [count, setCount] = useState(0)
      let increment = ()=>{
        setCount(count + 1)
  
      }
    return (
      <div className="App">
          <h2>Counter : {count}</h2>
        <button onClick={increment}>Add One</button> <br/>
        <button onClick={()=> setCount(count - 1)}>Decrease One</button> <br/>
        <button onClick={()=> setCount(0)}>Reset </button> <br/>
  
      </div>
    );
  }
  
