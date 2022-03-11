import React, { useState, useEffect } from "react";
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
  max-width: 45rem;
  min-width: 45rem;
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

const SelectionBox = ({ setSavedJokes, savedJokes }) => {
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
          <BoxTitle>Generate a new joke</BoxTitle>
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
              padding: "1rem",
              minHeight: "20rem",
              maxHeight: "20rem",
              overflow: "auto",
            }}
          >
            <p style={{ fontSize: "1.5rem" }}>{newJoke.value}</p>
          </div>
          <ButtonComponent
            text={"Save joke"}
            styles={"margin-top: 2rem;"}
            click={() =>
              setSavedJokes((prev) =>
                newJoke.value
                  ? prev && !prev?.map((joke) => joke.id).includes(newJoke.id)
                    ? [...prev, newJoke]
                    : [...prev]
                  : [...prev]
              )
            }
          />
        </LeftContainer>
      </BoxContainer>
    </Wrapper>
  );
};

export default SelectionBox;
