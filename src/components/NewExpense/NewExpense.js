import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpensedata) =>{
        const expenseData = {
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const setEditingHandler = () =>{
        setEditing(true);
    }

    const setCancelHandler = () =>{
        setEditing(false);
    }
  return (
    <div className="new-expense">
       {!isEditing && <button onClick={setEditingHandler}>Add New Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel = {setCancelHandler}/>}
    </div>
  );
};

export default NewExpense;


