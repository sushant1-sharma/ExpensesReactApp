import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState }  from "react";
const Expenses = (props)=> {
  
  const [FilteredYear, setFilteredYear] = useState('2020');
  const addFilterByYear = (SelectedYear) =>{
          console.log(SelectedYear);
          setFilteredYear(SelectedYear);
  };
  return (
    
      
    <Card className="expenses">
      <ExpenseFilter Selected = {FilteredYear} onAddfilter = {addFilterByYear} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
