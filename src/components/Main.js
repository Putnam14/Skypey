import React from "react";
import styled from "styled-components";
import Empty from "../components/Empty";
import ChatWindow from "../containers/ChatWindow";

const MainStyles = styled.main`
  height: 100%;
  background-color: rgba(25, 25, 27, 1);
`;

const Main = ({ user, activeUserId }) => (
  <MainStyles>
    {activeUserId ? (
      <ChatWindow activeUserId={activeUserId} />
    ) : (
      <Empty user={user} />
    )}
  </MainStyles>
);

export default Main;
