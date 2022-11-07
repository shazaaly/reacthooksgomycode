import React, { useState } from 'react'

export const ReducerHookIntro = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1)
                setShowText(!showText)
            }}
            >Click Me </button>

            {showText && <p>Toggled text</p>}

        </div>
    )
}
