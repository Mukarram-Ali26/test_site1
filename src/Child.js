import React, { useContext } from "react";
import CountContext from "./Contecxtapi";
function Child() {
  let count = useContext(CountContext);
  return (
    <div>
     
      
      <h2>here is the value of counter context : {count[0]}</h2>
      <button onClick={() => {count[1](++count[0])}}>contextInc</button>
      <button onClick={() => {count[1](--count[0])}}>contextDec</button>
    </div>
  );
}
export default Child;
