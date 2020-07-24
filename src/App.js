import React from "react";
import styled from "styled-components";
import "./styles.css";

const Button = styled.button`
  background: ${props => (props.secondary ? "white" : "red")};
  color: ${props => (props.secondary ? "red" : "white")};

  font-size: 1rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

export default function App() {
  return (
    <div className="App">
      <h1>React- styled components</h1>
      <Button>Przycisk</Button>
      <Button secondary>Przycisk</Button>
    </div>
  );
}
