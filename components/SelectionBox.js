import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import SelectBar from "./SelectBar";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 2rem;
`;
const BoxContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
  padding: 2rem 4rem;
  background-color: whitesmoke;
  max-width: 50rem;
  min-height: 35rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const LeftContainer = styled.div`
  justify-content: center;
  text-align: center;
  max-width: 25rem;
  min-width: 35rem;
`;

const BoxTitle = styled.p`
  font-family: "Alfa Slab One", cursive;
  font-size: 3rem;
`;

const SelectionBox = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [newJoke, setNewJoke] = useState({});

  const categoryURL = "https://api.chucknorris.io/jokes/categories";

  const generateNewJoke = async () => {
    const URL = (await selectedCategory?.value)
      ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory.value.toLowerCase()}`
      : "https://api.chucknorris.io/jokes/random";
    const response = await fetch(URL);
    const data = await response.json();
    setNewJoke(data);
    console.log(newJoke);
  };
  return (
    <Wrapper>
      <BoxContainer>
        <LeftContainer>
          <BoxTitle onClick={() => console.log(selectedCategory)}>
            Generate a new joke
          </BoxTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "2rem 0",
            }}
          >
            <SelectBar url={categoryURL} onChange={setSelectedCategory} />
            <ButtonComponent text={"New Joke"} click={generateNewJoke} />
          </div>
          <div
            style={{
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "1rem",
              padding: "3rem",
              minHeight: "20rem",
            }}
          >
            <p style={{ fontSize: "1.5rem" }}>{newJoke.value}</p>
          </div>
        </LeftContainer>
      </BoxContainer>
    </Wrapper>
  );
};

export default SelectionBox;
