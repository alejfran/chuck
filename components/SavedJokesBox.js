import React from "react";
import styled from "styled-components";
import ListElement from "./ListElement";

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 2rem;
`;
const BoxContainer = styled.div`
  justify-content: space-around;
  text-align: center;
  display: block;
  padding: 2rem 4rem;
  background-color: whitesmoke;
  max-width: 45rem;
  min-width: 45rem;
  min-height: 35rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const BoxTitle = styled.p`
  font-family: "Alfa Slab One", cursive;
  font-size: 3rem;
`;

const SavedJokesBox = ({ savedJokes, setSavedJokes }) => {
  return (
    <Wrapper>
      <BoxContainer>
        <BoxTitle>Saved jokes</BoxTitle>
        <div
          style={{
            boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
            borderRadius: "1rem",
            padding: "1.5rem",
            minHeight: "30rem",
            maxHeight: "30rem",
            overflow: "auto",
          }}
        >
          {savedJokes?.map((joke) => (
            <ListElement
              key={joke.id}
              joke={joke}
              setSavedJokes={setSavedJokes}
            />
          ))}
        </div>
      </BoxContainer>
    </Wrapper>
  );
};

export default SavedJokesBox;
