import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SelectBar from "../components/SelectBar";
import SelectionBox from "../components/SelectionBox";

const HomeContainer = styled.div`
  background: #f7971e;
  background: -webkit-linear-gradient(to bottom, #f7971e, #ffd200);
  background: linear-gradient(to bottom, #f7971e, #ffd200);
  padding: 4rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <SelectionBox />
    </HomeContainer>
  );
};

export default Home;
