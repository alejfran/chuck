import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SavedJokesBox from "../components/SavedJokesBox";
import SelectionBox from "../components/SelectionBox";

const HomeContainer = styled.div`
  background: #f7971e;
  background: -webkit-linear-gradient(to bottom, #f7971e, #ffd200);
  background: linear-gradient(to bottom, #f7971e, #ffd200);
  padding: 4rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
  const [savedJokes, setSavedJokes] = useState([]);

  return (
    <HomeContainer>
      <Header />
      <BoxWrapper>
        <SelectionBox setSavedJokes={setSavedJokes} />
        <SavedJokesBox savedJokes={savedJokes} setSavedJokes={setSavedJokes} />
      </BoxWrapper>
    </HomeContainer>
  );
};

export default Home;
