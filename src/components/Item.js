import styled from "styled-components";
import { useDispatch } from "react-redux";

const ItemStyle = styled.div`
  border: solid 0.5px var(--text-color-dark);
  border-radius: var(--radius);
  margin: var(--div-top-bottom-margin) var(--div-left-right-margin);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
`;

const Item = ({ description, cost, category }) => {
  const dispatch = useDispatch();

  const payload = {
    description: description,
    amount: cost,
    category: category,
  };

  const deleteHandler = () => {
    // console.log("delete");
    dispatch({ type: `${category.toLowerCase()}/delete`, payload });
  };

  return (
    <ItemStyle>
      <p>{description}</p>
      <p>${cost}</p>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </ItemStyle>
  );
};
export default Item;
