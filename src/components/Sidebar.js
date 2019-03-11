import React from "react";
import styled from "styled-components";

const SidebarStyles = styled.aside`
  height: 100%;
  width: 80px;
  background-color: rgba(32, 32, 35, 1);
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
  @media (min-width: 576px) {
    width: 320px;
  }
`;

const Sidebar = () => <SidebarStyles>Sidebar</SidebarStyles>;

export default Sidebar;
