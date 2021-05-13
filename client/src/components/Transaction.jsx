import React from 'react';
import {useGlobalContext} from '../context';


function Transaction({amount,id,text}) {

    
    const {transactions, deleteTransactions} = useGlobalContext();
    const sign = amount < 0 ? '-' : '+'

    return (
        <li className = {amount < 0 ? 'minus' : 'plus'} >
          {text}
          <span>{sign}${Math.abs(amount)}</span>
          <button onClick = {()=> deleteTransactions(id)} className ="delete-btn">x</button>
        </li> 
    );
}

export default Transaction;