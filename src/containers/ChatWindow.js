import React from "react";
import styled from "styled-components";
import Chats from "../components/Chats";
import Header from "../components/Header";
import MessageInput from "./MessageInput";
import store from "../store";

const ChatStyles = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

class ChatWindow extends React.Component {
  componentDidMount() {
    console.log("this.chatsRef", this.container.scrollTop);
    this.scrollToBottom();
  }
  componentDidUpdate() {
    console.log("Updated this.chatsRef", this.container.scrollTop);
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const scrollHeight = this.container.scrollHeight;
    console.log("setting scrollTop to ", scrollHeight);
    this.container.scrollTop = scrollHeight;
    console.log(this.container.scrollTop);
  };
  render() {
    const { activeUserId } = this.props;
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.conversations[activeUserId];
    const messages = Object.keys(activeMessages).map(
      key => activeMessages[key]
    );
    return (
      <ChatStyles ref={elem => (this.container = elem)}>
        <Header user={activeUser} />
        <Chats messages={messages} />
        <MessageInput />
      </ChatStyles>
    );
  }
}

export default ChatWindow;
