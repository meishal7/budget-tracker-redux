import { Fragment } from "react";
import styled from "styled-components";

const ItemStyle = styled.div`
  border: solid 0.5px var(--text-color-dark);
  border-radius: var(--radius);
  margin: var(--div-top-bottom-margin) var(--div-left-right-margin);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
`;

const Item = ({ description, cost }) => {
  return (
    <ItemStyle>
      <p>{description}</p>
      <p>${cost}</p>
      <button type="button">Delete</button>
    </ItemStyle>
  );
};
export default Item;
