import { Fragment } from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const { totalIncome } = useSelector((state) => state.income);
  console.log(totalIncome);
  //const dispatch = useDispatch();

  return (
    <Fragment>
      <h3>Summary</h3>
      <p>Total income: ${totalIncome}</p>
      <p>Total expense: $0</p>
      <p>Left after spennding: $0</p>
    </Fragment>
  );
};
export default Summary;
