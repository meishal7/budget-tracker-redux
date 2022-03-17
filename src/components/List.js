import styled from "styled-components";
import Item from "./Item";

const ListStyle = styled.div`
  border: solid 2px black;
  margin-top: 2em;
  h3 {
    text-align: center;
    background-color: #50f250;
  }

  .items {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const List = ({ header, data }) => {
  return (
    <ListStyle>
      <h3>{header}</h3>
      <div className="items">
        <h4>Description</h4>
        <h4>Amount</h4>
      </div>

      <div>
        {data.map((item) => (
          <Item
            description={item.description}
            cost={item.amount}
            key={item.description}
          />
        ))}
      </div>
    </ListStyle>
  );
};
export default List;
