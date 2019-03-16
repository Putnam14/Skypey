import React from "react";
import styled from "styled-components";

const ChatStyles = styled.div``;

const Chats = ({ messages }) => {
  return (
    <ChatStyles>
      {messages.map(text => (
        <p>{text}</p>
      ))}
    </ChatStyles>
  );
};

export default Chats;
