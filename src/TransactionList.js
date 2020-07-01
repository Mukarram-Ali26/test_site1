import React, {useContext} from 'react';
import {GlobalContext} from './Contaxt';
import Transaction from './Transaction';

export const TransactionList = () => {
  const {Transactions} = useContext(GlobalContext);
    return (
        <div>
             <h3>History</h3>
      <ul  className="list">
        {Transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          
      </ul>
        </div>
    )
}
export default TransactionList