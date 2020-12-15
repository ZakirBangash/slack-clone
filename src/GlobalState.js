// import React,
// {createContext, useContext, useReducer} 
// from 'react';

// export const StateContext = createContext();

// export const StateProvider = ({children,reducer,initialState}) => (

//         <StateContext.Provider value = {
//             useReducer(reducer, initialState)
//         }>
//             {children}
//         </StateContext.Provider>
// );


// export const useStateValue = () => useContext(StateContext);




import React, {
    createContext,
    useReducer,

  } from "react";
  
  
  export const GlobalContext = createContext();
  
  
  export const GlobalProvider = ({ children, initialState,reducer }) => {
    let [state, dispatch] = useReducer(reducer,initialState.user);

    console.log(initialState.user)
  
    
  
    const clearCart = () => {
      dispatch({
        type: "clearCart",
      });
    };
  
   
  
    
  
    

    
  
    return (
      <GlobalContext.Provider
        value={{
           state
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
