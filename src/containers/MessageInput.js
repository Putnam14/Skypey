import React from "react";
import styled from "styled-components";
import store from "../store";
import { setTypingValue } from "../actions";

const MessageInputStyles = styled.form``;

const MessageInput = ({ value }) => {
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  return (
    <MessageInputStyles>
      <input
        onChange={handleChange}
        value={value}
        placeholder="Write a message"
      />
    </MessageInputStyles>
  );
};

export default MessageInput;
