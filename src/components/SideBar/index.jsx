import React from "react";
import {
  CloseIcon,
  SideBarContainer,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute
} from "./SideBarStyle";

export default function SideBar({toggle, isOpen}) {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink onClick={toggle} to="about">About</SideBarLink>
            <SideBarLink onClick={toggle} to="experience">Experience</SideBarLink>
            <SideBarLink onClick={toggle} to="devtools">DevTools</SideBarLink>
            <SideBarLink onClick={toggle} to="projects">Projects</SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SideBarRoute to="/contact">Send a Message</SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
}
