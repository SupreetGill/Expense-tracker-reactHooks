
import React , {usestate, useContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import reducer from './reducer';


const AppContext = React.createContext(); 


const initialState = {
 transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

    
export const AppProvider = ({children}) => {

   const [state, dispatch] = useReducer(reducer, initialState)

   const deleteTransactions = (id)=>{
     dispatch({type :'DELETE_TRANSACTION',payload :id })
   }

   const addTransaction = (transaction)=>{
    dispatch({ type:'ADD_TRANSACTION', payload : transaction});
   }

    return <AppContext.Provider value = {{
        ...state,
        deleteTransactions,
        addTransaction
    }}>
               {children}
             </AppContext.Provider>
}

 export const useGlobalContext = () => {
    return useContext(AppContext)
}