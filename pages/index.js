import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SelectBar from "../components/SelectBar";

const HomeContainer = styled.div`
  background: #f7971e;
  background: -webkit-linear-gradient(to bottom, #f7971e, #ffd200);
  background: linear-gradient(to bottom, #f7971e, #ffd200);
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <SelectionBox />
      <SelectBar />
    </HomeContainer>
  );
};

export default Home;
