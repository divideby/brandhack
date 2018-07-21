import React from "react";
import styled from "styled-components";

const TextField = props => {
  return <TextFieldView {...props} />;
};

export default TextField;

const TextFieldView = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 20pt;
`;
