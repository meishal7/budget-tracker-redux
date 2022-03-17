import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SummaryStyle = styled.div`
  /* border: 1px black solid; */
  padding-top: 1em;
  margin: 1em 1em;
  border-radius: 10px;
  background-color: white;
  color: #53451d;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "summary summary summary"
    "income expense left";
  h3 {
    text-align: center;
    grid-area: summary;
  }
  .income {
    grid-area: income;
    text-align: center;
  }
  .expense {
    grid-area: expense;
    text-align: center;
  }

  .left {
    grid-area: left;
    text-align: center;
  }
`;

const Summary = () => {
  const { totalIncome } = useSelector((state) => state.income);
  const { totalExpense } = useSelector((state) => state.expense);

  let left = totalIncome - totalExpense;

  return (
    <SummaryStyle>
      <h3>Summary</h3>

      <p>Total income: ${totalIncome}</p>
      <p>Total expense: ${totalExpense}</p>
      <p>Left after spennding: ${left}</p>
    </SummaryStyle>
  );
};
export default Summary;
