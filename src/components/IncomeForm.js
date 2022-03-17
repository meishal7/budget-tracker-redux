import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { incomeActions } from "../store/root-redux";

const FormStyle = styled.div`
  .submit-btn {
    border: 1px solid black;
    min-height: 50px;
    min-width: 100px;
    background-color: pink;
  }
  border-radius: 10px;
  background-color: white;
  color: #53451d;
  h3 {
    text-align: center;
  }
  fieldset {
    border: none;
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
  };

  const incomeHandler = (event) => {
    setIncomeDescr(event.target.value);
  };

  const incomeAmountHandler = (event) => {
    setIncomeAmount(event.target.value);
  };

  return (
    <FormStyle>
      <h3>Income Entries</h3>
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
