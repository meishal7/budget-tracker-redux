import { Fragment } from "react";

const Item = ({ description, cost }) => {
  return (
    <Fragment>
      <p>{description}</p>
      <p>{cost}</p>
      <button type="button">Delete</button>
    </Fragment>
  );
};
export default Item;
