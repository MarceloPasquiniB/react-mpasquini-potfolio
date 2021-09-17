import React from "react";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyle";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                {" "}
                <span>M </span>Pasquini
              </SocialLogo>
              <WebsiteRights>
                Marcelo Pasquini © {new Date().getFullYear()} All rights
                reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.linkedin.com/in/mpbrazil/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/MarceloPasquiniB"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}
