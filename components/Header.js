import Image from "next/image";
import React from "react";
import ChuckImage from "/public/chuckposter.png";
import styled from "styled-components";
import { GiAk47 } from "react-icons/gi";

const HeaderContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const TitleContainer = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
`;
const Title = styled.div`
  font-family: "Alfa Slab One", cursive;
  font-size: 7rem;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <GiAk47 size={"17rem"} style={{ marginRight: "2rem" }} />
        <Title>
          Chuck<br></br> Norris Jokes
        </Title>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
