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
    useState
  } from "react";

  import reducer from './reducer'

  

  const GlobalContext = createContext();
  export default GlobalContext;
  
  const initialState = [];
  export const GlobalProvider = ({ children }) => {
      let [state, dispatch] = useReducer(reducer,initialState);


      let [cartSubTotal, setSubTotal] = useState(0);
      let [cartTax, setTax] = useState(0);
      let [cartTotal, setTotal] = useState(0);


      const addTotal = () => {
        let subTotal = 0;
        state.map((item) => (subTotal += item.total));
    
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        console.log(typeof tax)
        const total = subTotal + tax;
        setSubTotal(subTotal);
        setTax(tax);
        setTotal(total);
      };
    



      function addUser(user)  {
       dispatch({
         type: "addUser",
         payload:user
       })
    };
    
  
    return (
      <GlobalContext.Provider
        value={{
          transactions:state,
          addUser
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
