import React from 'react';
import {useGlobalContext} from '../context';
import Transaction from './Transaction';

function TransactionList(props) {

    const {transactions} = useGlobalContext();

    return (
        <>
        <h3>History</h3>
        <ul className="list">
           {transactions.map(t=>{
               return <Transaction key = {t.id} {...t} />
           })}
      </ul>
      </>
    );
}

export default TransactionList;