import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const addFilterByYear = (SelectedYear) => {
    console.log(SelectedYear);
    setFilteredYear(SelectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  
  return (
    <li>
    <Card className="expenses">
      <ExpenseFilter Selected={FilteredYear} onAddfilter={addFilterByYear} />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
  );
};
export default Expenses;
