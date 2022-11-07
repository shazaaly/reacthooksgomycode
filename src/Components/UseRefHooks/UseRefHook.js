import React, { useRef } from 'react'

export const UseRefHook = () => {

    const inputRef = useRef(null)
    // console.log(inputRef.current);  //input field //

    const focusHandler=()=>{
        inputRef.current.focus()
    }

    const clearInputHandler=()=>{
      /*evacuate field after submission */
        inputRef.current.value = ''
    }

  return (
    <div>

        <h2>GoMyCode</h2>
        <input ref={inputRef} placeholder='..add text' type='text' />
        <button onClick={()=>console.log(inputRef.current.value)}>Consol input text</button>
        <button onClick={focusHandler}>input focus</button>
        <button onClick={clearInputHandler}>Submit</button>
    </div>
  )
}
