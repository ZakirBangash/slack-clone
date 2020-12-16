// export const initialState = {
//     user: null,
// };

// export const actionTypes = {
//     SET_USER: "SET_USER",
// }

// // const [state, dispatch] = useReducer(reducer, initialState, init)

// const reducer = (state, action) => {
//     console.log(action)

//     switch(action.type) {
//         case actionTypes.SET_USER:
//             return {
//                 ...state,
//                 user:action.user
//             }
//             default: return state;
//     }
// }

// export default reducer;

export const initialState = {
    user: null,
};


const reducer = (state, action) => {
    
  console.log(action)
      switch (action.type) {
        case "addUser": {
          console.log("AddUser of the Sign")
              return state;
        }
        
        default:
          return state;
      }
    };

    export default reducer;
