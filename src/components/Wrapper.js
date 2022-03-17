import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import List from "./List";
import Summary from "./Summary";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const WrapperStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  border: none;
  background-color: var(--bg-color);

  .forms {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: var(--div-top-bottom-margin) var(--div-left-right-margin);
  }
  .header {
    text-align: center;
    padding: 10px 10px;
    color: var(--text-color-dark);
  }
`;

const Wrapper = () => {
  const { incomeItems } = useSelector((state) => state.income);
  const { expenseItems } = useSelector((state) => state.expense);

  return (
    <WrapperStyle>
      <h1 className="header">Budget Tracker</h1>

      <Summary />
      <div className="forms">
        <IncomeForm />
        <ExpenseForm />
      </div>
      <List data={incomeItems} header={"Income"} />
      <List data={expenseItems} header={"Expense"} />
    </WrapperStyle>
  );
};
export default Wrapper;
