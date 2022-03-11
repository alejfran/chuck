import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  ${(props) => props.styles}
  background: #f7971e;
  background: -webkit-linear-gradient(to right, #f7971e, #ffd200);
  background: linear-gradient(to right, #f7971e, #ffd200);
  padding: 0 1.5rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  opacity: 1;
  &:hover {
    background: #b06405;
    background: -webkit-linear-gradient(to right, #b06405, #d6b209);
    background: linear-gradient(to right, #b06405, #d6b209);
  }
`;

const ButtonComponent = ({ text, click, styles }) => {
  return (
    <ButtonContainer onClick={click} styles={styles}>
      <p style={{ fontFamily: "Alfa Slab One", fontSize: "1.2rem" }}>{text}</p>
    </ButtonContainer>
  );
};

export default ButtonComponent;
