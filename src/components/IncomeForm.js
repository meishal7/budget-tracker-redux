import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { incomeActions } from "../store/root-redux";

const FormStyle = styled.div`
  background-color: var(--section-color);
  /* border: var(--border-card); */
  border: none;
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
  .income-header {
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
    color: var(--text-color-dark);
    margin-top: var(--btn-margin);
    margin-bottom: var(--btn-margin);
    padding-top: var(--btn-padding);
    padding-bottom: var(--btn-padding);
    background-color: var(--btn-color);
  }
  input {
    height: 40px;
    border: 0.5px solid var(--text-color-dark);
    border-radius: 5px;
  }
  input:focus {
    border: solid 1px black;
  }
`;

const IncomeForm = () => {
  const [incomeDescr, setIncomeDescr] = useState(" ");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const dispatch = useDispatch();

  const submitIncomeHandler = (event) => {
    event.preventDefault();

    dispatch(
      incomeActions.addIncome({
        amount: +incomeAmount,
        description: incomeDescr,
      })
    );

    setIncomeAmount(0);
    setIncomeDescr("");
  };

  const incomeHandler = (event) => {
    setIncomeDescr(event.target.value);
  };

  const incomeAmountHandler = (event) => {
    setIncomeAmount(event.target.value);
  };

  return (
    <FormStyle>
      <h3 className="income-header">Income Entries</h3>
      <form onSubmit={submitIncomeHandler}>
        <fieldset>
          <label htmlFor="income-description">Income Description</label>
          <input
            type="text"
            id="income-description"
            name="income-description"
            value={incomeDescr}
            onChange={incomeHandler}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="income-amount">Income Amount</label>
          <input
            type="number"
            id="income-amount"
            name="income-amount"
            value={incomeAmount}
            onChange={incomeAmountHandler}
          ></input>
        </fieldset>
        <button className="submit-btn" type="submit">
          Add Income
        </button>
      </form>
    </FormStyle>
  );
};
export default IncomeForm;
