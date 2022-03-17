import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import List from "./List";
import Summary from "./Summary";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Fragment } from "react";

const WrapperStyle = styled.div`
  width: 60vw;
  margin: 1em auto;
  background-color: #f9ce4e;
  border-radius: 10px;

  h1 {
    text-align: center;
    padding-top: 1em;
    font-weight: 800;
    color: #9552f2;
  }
  .forms {
    display: flex;
    flex-wrap: wrap;
    padding: 1em 1em;
  }
`;

const Wrapper = () => {
  const { incomeItems } = useSelector((state) => state.income);
  const { expenseItems } = useSelector((state) => state.expense);

  return (
    <WrapperStyle>
      <h1>Budget Tracker</h1>

      <Summary />
      <div>
        <IncomeForm />
        <ExpenseForm />
      </div>
      <List data={incomeItems} header={"Income"} />
      <List data={expenseItems} header={"Expense"} />
    </WrapperStyle>
  );
};
export default Wrapper;
