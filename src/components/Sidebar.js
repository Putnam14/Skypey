import React from "react";
import styled from "styled-components";
import User from "../containers/User";

const SidebarStyles = styled.aside`
  height: 100%;
  width: 80px;
  background-color: rgba(32, 32, 35, 1);
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
  overflow-y: scroll;
  @media (min-width: 576px) {
    width: 320px;
  }
`;

const Sidebar = ({ contacts }) => {
  console.log(contacts[0][1].name);
  return (
    <SidebarStyles>
      {contacts.map(contact => (
        <User user={contact[1]} key={contact[0]} />
      ))}
    </SidebarStyles>
  );
};

export default Sidebar;
