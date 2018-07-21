import React from "react";
import styled from "styled-components";

const Button = props => {
  return <ButtonView {...props}>{props.label}</ButtonView>;
};

export default Button;

const ButtonView = styled.div`
  background-color: palevioletred;
  color: papayawhip;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:hover {
    opacity: 0.7;
  }
`;
