import React from "react";
import styled from "styled-components";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";

const MessageInputStyles = styled.form`
  width: 80%;
  margin: 1rem auto;
  input {
    width: 100%;
    border: 0;
    border-radius: 10px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 1rem;
    outline: 0;
  }
`;

const MessageInput = () => {
  const state = store.getState();
  const { typing, activeUserId } = state;
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(sendMessage(typing, activeUserId));
  };
  return (
    <MessageInputStyles onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={typing}
        placeholder="Write a message"
      />
    </MessageInputStyles>
  );
};

export default MessageInput;
