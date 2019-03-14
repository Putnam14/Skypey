import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";

const AppStyles = styled.div`
  height: 100%;
  max-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  color: rgba(189, 189, 192, 1);
`;

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <AppStyles>
      <Sidebar contacts={Object.entries(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </AppStyles>
  );
};

export default App;
