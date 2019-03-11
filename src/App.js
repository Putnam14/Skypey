import React, { Component } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const AppStyles = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  color: rgba(189, 189, 192, 1);
`;

class App extends Component {
  render() {
    return (
      <AppStyles>
        <Sidebar />
        <Main />
      </AppStyles>
    );
  }
}

export default App;
