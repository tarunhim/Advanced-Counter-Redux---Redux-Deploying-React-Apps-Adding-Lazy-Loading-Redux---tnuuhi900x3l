import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, addAmount, signIn, signOut } from "../actions/action";

function App() {
  const [amount, setAmount] = useState(); 
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const loginOrLogout = () => {
    if(store.islogged === false) {
      dispatch(signIn());
    } else {
      dispatch(signOut());
    }
  };

  const inc = () => {
    dispatch(increment());
  }

  const dec = () => {
    dispatch(decrement());
  }

  const amountChange = (e) => {
    setAmount(e.target.value);
  };

  const addAmountClick = () => {
    if(amount === "" || amount === undefined || amount === null) {
      dispatch(addAmount(2));
    } else {
      dispatch(addAmount(parseInt(amount)));
    }
  }

  return (
    <div id='main'>
      <button onClick={loginOrLogout}>{store.islogged === false ? "Login" : "Logout"}</button>
      {
        store.islogged === false ? undefined :
        <div>
          <h3 data-testid="counter">{store.counter}</h3>
          <button onClick={inc} style={{marginRight: 10+"px"}}>+</button>
          <button onClick={dec} style={{marginRight: 10+"px"}}>-</button>
          <input type="number" defaultValue={amount} onChange={(e) => amountChange(e)} />
          <button onClick={addAmountClick}>Add amount</button>
        </div>
      }
    </div>
  );
}

export default App;
