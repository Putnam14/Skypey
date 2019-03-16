import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(189, 189, 192, 0.2);
  h1 {
    color: #fff;
  }
`;

const Header = ({ user }) => {
  const { name, status } = user;
  return (
    <HeaderStyles>
      <h1>{name}</h1>
      <p>{status}</p>
    </HeaderStyles>
  );
};

export default Header;
