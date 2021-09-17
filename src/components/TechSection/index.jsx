import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Tech,
  TechWrap,
} from "./TechSectionStyle";

export default function TechSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
}) {


  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
              </TextWrapper>
            </Column1>
            <Column2>
              <TechWrap>
                <Tech src={img1} alt={alt1}/>
                <Tech src={img2} alt={alt2}/>
                <Tech src={img3} alt={alt3}/>
                <Tech src={img4} alt={alt4}/>
                <Tech src={img5} alt={alt5}/>
                <Tech src={img6} alt={alt6}/>
              </TechWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
