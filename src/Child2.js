import React, {useReducer} from 'react';
import Redusecount from './Reduceapi';
function Child2 () {
    let [state, dispatch] = useReducer(Redusecount, 1)
    return(
        <div>
            <h3>here is the value of Reduser : {state}</h3>
            <button onClick={() => {dispatch('INCRIMENT')}}>ReduceInc</button>
            <button onClick={() => {dispatch('DECREMENT')}}>ReduceDec</button>
        </div>
    );
}
export default Child2