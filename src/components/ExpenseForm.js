import { Fragment, useState } from "react";

const ExpenseForm = () => {
  const [expDescr, setExpDescr] = useState("");
  const [expAmount, setExpAmount] = useState(0.0);

  const submitExpHandler = (event) => {
    event.preventDefault();

    let newExp = {
      expDescr: expDescr,
      expAmount: expAmount,
    };
    console.log(newExp);
  };

  const expHandler = (event) => {
    setExpDescr(event.target.value);
  };

  const expAmountHandler = (event) => {
    setExpAmount(event.target.value);
  };

  return (
    <Fragment>
      <h3>Expense Entries</h3>
      <form onSubmit={submitExpHandler}>
        <fieldset>
          <label htmlFor="expense-description">Expense Description</label>
          <input
            type="text"
            id="expense-description"
            name="expense-description"
            value={expDescr}
            onChange={expHandler}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="expense-amount">Income Amount</label>
          <input
            type="number"
            id="expense-amount"
            name="expense-amount"
            value={expAmount}
            onChange={expAmountHandler}
          ></input>
        </fieldset>
        <button type="submit">Add Expense</button>
      </form>
    </Fragment>
  );
};
export default ExpenseForm;
