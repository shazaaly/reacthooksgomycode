import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {

    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // .then( res => console.log(res.data))
            // .then( res=>console.log(res.data[0].title))
            .then(res => setData(res.data[0].title))

    },[]);
    return (

        <div>
            <p> Data title : {data}</p>

        </div>
    )
}
