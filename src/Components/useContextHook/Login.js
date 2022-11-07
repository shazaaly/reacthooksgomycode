import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContextHook'

export const Login = () => {
    const user = useContext(UserContext);
    
    
    return (
        <div>
            <p>Login Component context : {user.name} </p>

        </div>
    )
}
