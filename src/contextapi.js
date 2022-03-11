import React,{useContext} from 'react'

const ContextCreate = React.createContext()

export const Contextapiis = ({children})=>{
    return(
        <ContextCreate.Provider value={{apiis:"hello"}}>
            {children}
        </ContextCreate.Provider>
    )
}

export const useApi = () =>{
    return useContext(ContextCreate)
}
