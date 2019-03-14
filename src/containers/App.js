import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";

const AppStyles = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  color: rgba(189, 189, 192, 1);
`;

const App = () => {
  const {
    contacts: { contacts }
  } = store.getState();

  return (
    <AppStyles>
      <Sidebar contacts={Object.entries(contacts)} />
      <Main />
    </AppStyles>
  );
};

export default App;
