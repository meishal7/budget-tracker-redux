import styled from "styled-components";
import Item from "./Item";

const ListStyle = styled.div`
  border: 1px solid black;
  margin: 20px 40px;
  border-radius: var(--radius);
  .list-header {
    text-align: center;
    padding-top: 10px;
  }
`;

const List = ({ header, data }) => {
  return (
    <ListStyle>
      <h3 className="list-header">{header}</h3>

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
