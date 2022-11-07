import React, { useContext } from 'react'
import { UserContext } from './UserContextHook';
export const User = () => {
     const user = useContext(UserContext);

    return (
        <div>

            <p>User Component context : {user.work}</p> 
        </div>
    )
}
