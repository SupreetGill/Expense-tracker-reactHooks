import React from 'react';
import  Header  from './components/Header';
import  Balance from './components/Balance';
import  IncomeExpenses  from './components/IncomeExpenses';
import  TransactionList  from './components/TransactionList';
import AddTransaction  from './components/AddTransaction';

import {useGlobalContext} from './context';
import './App.css';

function App() {

  const {transactions} = useGlobalContext();

  return (
<>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
</>
  );
}

export default App;
