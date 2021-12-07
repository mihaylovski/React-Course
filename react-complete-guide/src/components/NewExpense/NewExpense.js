import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
        setIsEditing(false);    
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }; 

    const stopEditingHandler = (event) => {
        setIsEditing(false);
    }

    return <div className='new_expense'>
        { !isEditing && <button onClick={startEditingHandler}> Add New Expense </button>}
        { isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
}

export default NewExpense