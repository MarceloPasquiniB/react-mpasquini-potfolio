import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { VscThreeBars } from "react-icons/vsc";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavBarStyle";
import { animateScroll as scroll } from "react-scroll";

export default function NavBar({ toggle }) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <span>M</span> Pasquini
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <VscThreeBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Industry Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="devtools"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  DevTools
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact">Send a Message</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
