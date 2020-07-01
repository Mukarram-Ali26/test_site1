import React, {useState} from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpence from './IncomeExpence';
import TransactionList from './TransactionList';
import AddTrans from './AddTrans';
import {GlobalProvider} from './Contaxt'


import './App.css';
import Buttons from './props';
import CountContext from './Contecxtapi';
import Child2 from './Child2';
import Child from './Child';
import TransList from './TransactionList';
function App() {
  let [count, setCount] = useState(1); 
  let [isColor, setColor] = useState(false);
  let contextcount = useState(1)
  return (
    <CountContext.Provider value={contextcount}>
    <div className={`box ${isColor ? "light" : ""}`}>
      <h1>Sorry for thr late. i join the bootcamp Late.</h1>
      <h2>This is a {isColor ? 'Dark' : 'Bright'} Theme</h2>
      <br />
      
      <button onClick={() => {setColor(!isColor)}}>Theme Change</button>
      <GlobalProvider>
     
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTrans />

      </div>

      </GlobalProvider>

      <br />
      <Buttons counter={count}/>
      <button onClick={() => {setCount(++count)}}> increament count </button>
      <button onClick={() => {setCount(--count)}}> Decreament count </button>
      < Child />
      <Child2 />

    </div>
    </CountContext.Provider>
  );
}

export default App;
