import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'


const initialState = {
    Transactions: [
           
         ]
}

export  const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteTransaction (id) {
        dispatch({
            typr: 'Delete_Transaction',
            payload: id
        });
    }
    function AddTransaction (transaction) {
        dispatch({
            typr: 'Add_Transaction',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        Transactions: state.Transactions,
        deleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}