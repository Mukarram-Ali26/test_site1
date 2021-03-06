import React, {useState, useContext} from 'react';

import {GlobalContext} from './Contaxt';

export const AddTrans = () => {
  const {AddTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
      e.preventDefault();
      const newTransation = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      AddTransaction(newTransation);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
           placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
      
    )
}

export default AddTrans