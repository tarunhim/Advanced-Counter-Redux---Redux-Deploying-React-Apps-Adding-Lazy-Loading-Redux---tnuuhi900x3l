import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, signin, signout, decrease, increaseByAmount } from '../actions/action';

function App() {
  const [input,setInput] = useState(0);
  const {counter, islogged} = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div id='main'>
      <button onClick={() => dispatch(islogged ? {type:signout} : {type:signin})}>{islogged ? "Logout" : "Login"}</button>
      {islogged && 
      <>
      <button onClick={() => dispatch({ type:increase })}>+</button>
      <span>{counter}</span>
      <button onClick={() => dispatch({type:decrease})} >-</button>
      <input onChange={(e) => setInput(e.target.value)} type="number" value={input} />
      <button onClick={() => dispatch( {type: increaseByAmount, payload:input} )} >Add amount</button>
      </>}
    </div>
  );
}

export default App;
