import React from "react";
import styled from "styled-components";

const EmptyStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  h1 {
    color: #fff;
  }
  img {
    border-radius: 50%;
    margin: 2rem 0;
  }
  button {
    padding: 1rem;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 30px;
    outline: 0;
    :hover {
      background: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
  .status,
  .info {
    padding: 1rem;
  }
  .status {
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  }
`;

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];
  return (
    <EmptyStyles>
      <h1>Welcome, {first_name}</h1>
      <img src={profile_pic} alt={name} />
      <p className="status">
        <b>Status:</b> {status}
      </p>
      <button>Start a conversation</button>
      <p className="info">
        Search for someone to start chatting with, or go to Contacts to see who
        is available
      </p>
    </EmptyStyles>
  );
};

export default Empty;
