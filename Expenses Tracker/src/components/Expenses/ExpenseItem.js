import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
       setTitle('Updated!');
        console.log(title)
    };

    return  (
        <li>
            <Card className='expense_item'>
                <ExpenseDate date={props.date}/>
                <div className='expense_item_description'>
                    <h2>{title}</h2>
                    <div className='expence_item_price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem; 