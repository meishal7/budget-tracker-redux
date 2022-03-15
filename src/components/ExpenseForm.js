import { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  .submit-btn {
    border: 1px solid black;
    min-height: 50px;
    min-width: 100px;
    background-color: pink;
  }
`;

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
    <FormStyle>
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
        <button className="submit-btn" type="submit">
          Add Expense
        </button>
      </form>
    </FormStyle>
  );
};
export default ExpenseForm;
