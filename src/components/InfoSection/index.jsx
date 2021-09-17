import React from "react";
import { useHistory } from "react-router";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
  Items,
  Button,
} from "./InfoSectionStyle";

export default function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  img,
  primary,
  dark,
  dark2,
  item1,
  item2,
  item3,
  item4,
  clickContent,
}) {
  const history = useHistory();

  const linkTo = () => {
    if (clickContent === "LinkedIn") {
      return window.open("https://www.linkedin.com/in/mpbrazil/");
    }
    if (clickContent === "experience") {
      return history.push("/contact");
    } else {
      return null;
    }
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Items darkText={darkText}>{item1}</Items>
                <Items darkText={darkText}>{item2}</Items>
                <Items darkText={darkText}>{item3}</Items>
                <Items darkText={darkText}>{item4}</Items>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={linkTo}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
