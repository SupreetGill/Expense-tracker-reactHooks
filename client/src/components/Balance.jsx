import React from 'react';
import {useGlobalContext} from '../context';



function Balance(props) {

    const {transactions} = useGlobalContext();

    const amounts = transactions.map(t=> t.amount);
    const total =amounts.reduce((acc, item)=> (acc += item),0).toFixed(2);

   console.log(amounts,total)

    return (
        <>
        <h2>Your Balance</h2>
        <h1  > ${total}</h1>
        </>
    );
}

export default Balance;