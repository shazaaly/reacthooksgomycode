import React, { useCallback, useState } from 'react'
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
    const [age, setAge] = useState(0)
    const [dark, setDark] = useState(false)
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    

    const getItems = useCallback(() => {
        return [age, age + 1, age + 2]

    }, [age])


    return (
        <div style={theme}>
            <input type='number' onChange={(e) => setAge(parseInt(e.target.value))} value={age} /> {age}

            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <ChildComponent getItems={getItems} />
        </div>
    )
}
