import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpensedata) =>{
        const expenseData = {
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
