import React from "react";
import styled from "styled-components";

const ChatStyles = styled.div``;

const ChatWindow = ({ activeUserId }) => {
  return <ChatStyles>Convo for user id: {activeUserId}</ChatStyles>;
};

export default ChatWindow;
