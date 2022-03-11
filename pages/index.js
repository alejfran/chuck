import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SavedJokesBox from "../components/SavedJokesBox";
import SelectionBox from "../components/SelectionBox";
import Cookie from "js-cookie";
import { parseCookies } from "../helpers";

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

const Home = ({ initialJokes }) => {
  console.log(JSON.parse(initialJokes));
  const [savedJokes, setSavedJokes] = useState([]);

  useEffect(() => {
    Cookie.set("jokes", JSON.stringify(savedJokes));
  }, [savedJokes]);

  useEffect(() => {
    setSavedJokes(JSON.parse(initialJokes));
  }, [initialJokes]);

  return (
    <HomeContainer>
      <Header />
      <BoxWrapper>
        <SelectionBox setSavedJokes={setSavedJokes} savedJokes={savedJokes} />
        <SavedJokesBox savedJokes={savedJokes} setSavedJokes={setSavedJokes} />
      </BoxWrapper>
    </HomeContainer>
  );
};

Home.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialJokes: cookies.jokes,
  };
};

export default Home;
