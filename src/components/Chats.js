import React from "react";
import styled from "styled-components";

const ChatsStyles = styled.div`
  display: grid;
  width: 85%;
  margin: 0 auto;
  p {
    color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    background: linear-gradient(90deg, #1986d8, #7b9cc2);
    max-width: 90%;
    justify-self: left;
    border-radius: 0 10px 10px 0;
  }
  .is_user_msg {
    background: #2b2c33;
    justify-self: right;
    border-radius: 10px 0 0 10px;
  }
  @media (max-width: 576px) {
    max-width: 60%;
  }
`;

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  console.log(message);
  return <p className={is_user_msg ? "is_user_msg" : ""}>{text}</p>;
};

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const scrollHeight = this.chatsRef.current.scrollHeight;
    this.chatsRef.current.scrollTop = scrollHeight;
  };
  render() {
    const { messages } = this.props;
    return (
      <ChatsStyles ref={this.chatsRef}>
        {messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </ChatsStyles>
    );
  }
}

export default Chats;
