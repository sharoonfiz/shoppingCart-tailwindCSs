import React, { useReducer } from 'react'
import { createContext } from 'react'
import { reducerCallBack } from './reducer'
import { initialState } from './reducer'

export const DataContext = createContext()

const Context = ({ children }) => {


    const [state, dispatch] = useReducer(reducerCallBack, initialState)
    const ContextValue = { state, dispatch }

    return (


        <div>
            <DataContext.Provider value={ContextValue}>
                {children}
            </DataContext.Provider>
        </div>

    )
}

export default Context