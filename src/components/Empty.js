import React from "react";
import styled from "styled-components";

const EmptyStyles = styled.div`
  .status {
  }
  .info {
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
