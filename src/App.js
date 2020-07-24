import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./styles.css";

const Button = styled.button`
  background: ${props =>
    props.secondary ? props.theme.colors.secondary : props.theme.colors.main};
  color: ${props => (props.secondary ? "red" : "white")};

  font-size: 1rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const InlineButton = styled(Button)`
  background: unset;
  color: #000;
`;
const theme = {
  colors: {
    main: "red",
    secondary: "white"
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>React- styled components</h1>
        <Button>Przycisk</Button>
        <Button secondary>Przycisk</Button>
        <InlineButton>Infline button</InlineButton>
      </div>
    </ThemeProvider>
  );
}
