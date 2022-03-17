import styled from "styled-components";
import Item from "./Item";

const ListStyle = styled.div`
  background-color: var(--section-color);
  border: none;
  margin: 20px 40px;
  border-radius: var(--radius);
  min-height: 50px;
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
