import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroSectionStyle";
import VideoArt from "../../videos/video-brush.mp4";
import { Button } from "../AnimatedButton/AnimatedButtonStyle";

export default function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg
            autoPlay
            loop
            muted
            playsInline
            src={VideoArt}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroTitle>
            <span>M</span>arcelo Pasquini
          </HeroTitle>
          <HeroP>Front-end Developer</HeroP>
          <HeroBtnWrapper>
            <Button
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Click to Discover {hover ? <ArrowFoward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}
