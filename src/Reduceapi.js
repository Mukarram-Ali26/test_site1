const Redusecount = (state, action) => {
 switch (action) {
     case 'INCRIMENT':
         return state + 1
     case 'DECREMENT':
         return state - 1 
     default :
         return state   
 }
}
export default Redusecount