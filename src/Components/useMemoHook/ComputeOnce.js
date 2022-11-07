import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react';

export const ComputeOnce = () => {

    const [data, setdata] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setdata(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log("THIS WAS COMPUTED");

        return longestName;
    };
    /*dependency is data not toggle  */
    const getLongestName = useMemo(() => findLongestName(data), [data]);
    return (
        <div>
            <h3>Hello from compute</h3>
            <div >{getLongestName}</div>

            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Toggle</p>}


        </div>
    )
}
