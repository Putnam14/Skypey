import React from "react";
import styled from "styled-components";

const UserStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 1rem;
  :hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  img {
    width: 50px;
    border-radius: 50%;
  }
  .user-details {
    display: none;
  }
  @media (min-width: 576px) {
    .user-details {
      display: block;
      padding-left: 1rem;
      .user-name {
        margin: 0;
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
      }
      .user-status {
        margin: 0;
        font-size: 0.8rem;
      }
    }
  }
`;

const User = ({ user }) => {
  const { name, email, profile_pic, user_id, status } = user;
  return (
    <UserStyles>
      <img src={profile_pic} alt={name} />
      <div className="user-details">
        <p className="user-name">{name}</p>
        <p className="user-status">{status}</p>
      </div>
    </UserStyles>
  );
};

export default User;
