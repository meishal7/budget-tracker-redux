import { Fragment, useState } from "react";

const IncomeForm = () => {
  const [incomeDescr, setIncomeDescr] = useState(" ");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const submitIncomeHandler = (event) => {
    event.preventDefault();

    let newIncome = {
      incomeDescr: incomeDescr,
      incomeAmount: incomeAmount,
    };
    console.log(newIncome);
  };

  const incomeHandler = (event) => {
    setIncomeDescr(event.target.value);
  };

  const incomeAmountHandler = (event) => {
    setIncomeAmount(event.target.value);
  };

  return (
    <Fragment>
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
        <button type="submit">Add Income</button>
      </form>
    </Fragment>
  );
};
export default IncomeForm;
