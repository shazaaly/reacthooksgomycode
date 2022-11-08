import React, { useEffect, useState } from 'react'

export const ChildComponent = ({ getItems }) => {

    const [items, setItems] = useState([])

    useEffect(() => {

        setItems(getItems())
        console.log('updated Items...');

    }, [getItems])

    return (
        <>
            {
                items.map(item => <div key={item}>{item}</div>)

            }

        </>
    )
}
