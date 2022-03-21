import List from "./List";
import Summary from "./Summary";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Form from "./Form";
import { incomeActions } from "../store/root-redux";
import { expenseActions } from "../store/root-redux";

const WrapperStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  border: none;
  background-color: var(--bg-color);
  padding-top: var(--div-top-bottom-padding);
  padding-bottom: var(--div-top-bottom-padding);

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
        <Form header={"Income"} action={incomeActions.addIncome} />
        <Form header={"Expense"} action={expenseActions.addExpense} />
      </div>
      <List data={incomeItems} header={"Income"} />
      <List data={expenseItems} header={"Expense"} />
    </WrapperStyle>
  );
};
export default Wrapper;
