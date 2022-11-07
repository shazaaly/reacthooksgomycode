import React, { useState, createContext, Children } from 'react'
export const UserContext = createContext(null)

export const user = {
  name: 'Shaza',
  work: 'GoMyCode'
}

export const UserContextHook = ({ Children }) => {

  return (
    <>

      <UserContext.Provider value={user}>
        {Children}
      </UserContext.Provider>

    </>
  )

}


