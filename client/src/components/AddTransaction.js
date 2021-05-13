import React, {useState} from 'react';
import {useGlobalContext} from '../context';
import { v4 as uuidv4 } from 'uuid';


function AddTransaction(props) {

  const {transactions,addTransaction} = useGlobalContext();


  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      text:text,
      amount:parseInt(amount)
    }
    addTransaction(newTransaction);
  }

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit = {handleSubmit} >
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input 
               onChange ={(e) => setText(e.target.value)}
                value = {text}
                type="text" 
                id="text" 
                placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor  ="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input 
              onChange ={(e) => setAmount(e.target.value)}
              value = {amount}
              type="number" 
              id="amount" 
              placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
        </>
    );
}

export default AddTransaction;