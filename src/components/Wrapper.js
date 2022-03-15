import { Fragment } from "react";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import List from "./List";
import Summary from "./Summary";

const Wrapper = () => {
  return (
    <Fragment>
      <h1>Budget Tracker</h1>
      <Summary />
      <IncomeForm />
      <ExpenseForm />
      <List />
      <List />
    </Fragment>
  );
};
export default Wrapper;