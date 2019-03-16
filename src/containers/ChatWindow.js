import React from "react";
import styled from "styled-components";
import Chats from "../components/Chats";
import Header from "../components/Header";
import store from "../store";

const ChatStyles = styled.div``;

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.conversations[activeUserId];
  const messages = Object.keys(activeMessages).map(
    key => activeMessages[key].text
  );
  return (
    <ChatStyles>
      <Header user={activeUser} />
      <Chats messages={messages} />
    </ChatStyles>
  );
};

export default ChatWindow;
