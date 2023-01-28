import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  
  const [FilteredYear, setFilteredYear] = useState("2020");

  const addFilterByYear = (SelectedYear) => {
    console.log(SelectedYear);
    setFilteredYear(SelectedYear);
  };

  console.log(props.items);
  return (
    <Card className="expenses">
      <ExpenseFilter Selected={FilteredYear} onAddfilter={addFilterByYear} />
      {props.items.filter((expense) => expense.date.getFullYear()==FilteredYear).map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
