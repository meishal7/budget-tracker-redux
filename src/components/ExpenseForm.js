import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/root-redux";

const FormStyle = styled.div`
  background-color: var(--section-color);
  border: var(--border-card);
  box-shadow: var(--shadow);
  flex: 1 1 100px;
  padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  /* margin-left: var(--div-left-right-margin);
  margin-right: var(--div-left-right-margin); */
  border-radius: var(--radius);
  margin: var(--div-top-bottom-margin) var(--div-left-right-margin);
  fieldset {
    display: flex;
    flex-direction: column;
  }
  .expense-header {
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
  .submit-btn {
    width: var(--btn-width);
    height: var(--btn-height);
    margin: 0 auto;
    display: block;
    border: none;
    border-radius: 5px;
    margin-top: var(--btn-margin);
    margin-bottom: var(--btn-margin);
    padding-top: var(--btn-padding);
    padding-bottom: var(--btn-padding);
    background-color: var(--btn-color);
    color: var(--text-color);
  }
  input {
    height: 40px;
    border-radius: 5px;
    border: none;
  }
  input:focus {
    border: solid 1px black;
  }
`;

const ExpenseForm = () => {
  const [expDescr, setExpDescr] = useState("");
  const [expAmount, setExpAmount] = useState(0.0);

  const dispatch = useDispatch();

  const submitExpHandler = (event) => {
    event.preventDefault();

    dispatch(
      expenseActions.addExpense({
        amount: +expAmount,
        description: expDescr,
      })
    );

    setExpAmount(0);
    setExpDescr("");
  };

  const expHandler = (event) => {
    setExpDescr(event.target.value);
  };

  const expAmountHandler = (event) => {
    setExpAmount(event.target.value);
  };

  return (
    <FormStyle>
      <h3 className="expense-header">Expense Entries</h3>
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
          <label htmlFor="expense-amount">Expense Amount</label>
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
