import React, {useState} from 'react';
import './App.css';
import Buttons from './props';
import CountContext from './Contecxtapi';
import Child2 from './Child2';
import Child from './Child';
function App() {
  let [count, setCount] = useState(1); 
  let [isColor, setColor] = useState(true);
  let contextcount = useState(1)
  return (
    <CountContext.Provider value={contextcount}>
    <div className={`box ${isColor ? "light" : ""}`}>
      <h1>ZR Pharma sukhyki mandi</h1>
      <h2>This is a {isColor ? 'Bright' : 'Dark'} Theme</h2>
      <br />
      <button onClick={() => {setColor(!isColor)}}>Theme Change</button>
      <Buttons counter={count}/>
      <br />
      <button onClick={() => {setCount(++count)}}> increament count </button>
      <button onClick={() => {setCount(--count)}}> Decreament count </button>
      < Child />
      <Child2 />

    </div>
    </CountContext.Provider>
  );
}

export default App;
