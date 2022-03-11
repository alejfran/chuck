import React from "react";
import styled from "styled-components";
import { IoRemoveCircleOutline, IoAdd } from "react-icons/io5";

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
`;
const ListElement = ({ joke, setSavedJokes }) => {
  const { value, id } = joke;
  return (
    <ListWrapper>
      <div style={{ maxWidth: "70%" }}>
        <p>{value}</p>
      </div>
      <div>
        <IoRemoveCircleOutline
          size={"2.1rem"}
          style={{
            cursor: "pointer",
            borderRadius: "100%",
            backgroundColor: "#f7971e",
            flex: "flex-1",
          }}
          color={"white"}
          onClick={() =>
            setSavedJokes((prev) => prev.filter((joke) => joke.id !== id))
          }
        />
      </div>
    </ListWrapper>
  );
};

export default ListElement;
