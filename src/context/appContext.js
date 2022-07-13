import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";
const initialState = {
    isLoading : false,
    showAlert : false,
    alertText : '',
    alertType: '',
}

//create context

 const AppContext = React.createContext();
//provider
 const AppProvider = ({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState)

    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
 }

//custom hook
 const useAppContext =()=> {
     return useContext(AppContext)
 }
 export {AppProvider, initialState, useAppContext}