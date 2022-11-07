import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                showText: state.showText  /*will not text it upon increment */
            }

        case 'TOGGLE':
            return {
                count: state.count,/*will not change counter upon increment */
                showText: !state.showText
            }
        default: return state
    }

}

export const UseReducerInAction = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
    return (
        <div>
            <h1>{state.count}</h1>

            <button onClick={() => {
                dispatch({ type: 'INCREMENT' })
                dispatch({ type: 'TOGGLE' })
            }}
            > Increment/Toggle
            </button>

            {state.showText && <p>Toggled text</p>}



        </div>
    )
}
