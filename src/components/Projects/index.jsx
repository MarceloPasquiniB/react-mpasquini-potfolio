import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  Button,
} from "./ProjectsStyle";
import Modal from "../Modal";
import { ModalTitle, ModalContent, ButtonWrap } from "../Modal/ModalStyle";

import Icon1 from "../../images/svg-colorgame.svg";
import Icon2 from "../../images/svg-beauty.svg";
import Icon3 from "../../images/svg-portfolio.svg";
import Icon4 from "../../images/svg-code.svg";

import { CardData } from "./Data";

export default function Projects() {
  const [modalOpened, setModalOpened] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const handleOpenModal = (e) => {
    setCardClicked(e.target.id);
    setModalOpened((prev) => !prev);
  };

  const openGitHub = (e) => {
    if (e.target.id === "cardThree") {
      return window.open("https://github.com/MarceloPasquiniB/react-mpasquini-potfolio");
    } else {
      return window.open("https://github.com/MarceloPasquiniB");
    }
  };

  const ModalBody = () => {
    if (cardClicked === "cardOne") {
      return (
        <>
          <ModalTitle>{CardData.cardOne.projectName}</ModalTitle>
          <ModalContent>{CardData.cardOne.description}</ModalContent>
          <ButtonWrap>
            <Button onClick={() => window.open(CardData.cardOne.live)}>
              Live
            </Button>
            <Button onClick={() => window.open(CardData.cardOne.code)}>
              Code
            </Button>
          </ButtonWrap>
        </>
      );
    }
    if (cardClicked === "cardTwo") {
      return (
        <>
          <ModalTitle>{CardData.cardTwo.projectName}</ModalTitle>
          <ModalContent>{CardData.cardTwo.description}</ModalContent>
          <ButtonWrap>
            <Button onClick={() => window.open(CardData.cardTwo.live)}>
              Live
            </Button>
            <Button onClick={() => window.open(CardData.cardTwo.code)}>
              Code
            </Button>
          </ButtonWrap>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>Some Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Web App Template</ProjectsH2>
            <ProjectsP> {CardData.cardOne.tools}</ProjectsP>
            <Button id="cardOne" onClick={handleOpenModal}>
              More
            </Button>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>NGO Rensponsive Website</ProjectsH2>
            <ProjectsP> {CardData.cardTwo.tools}</ProjectsP>
            <Button id="cardTwo" onClick={handleOpenModal}>
              More
            </Button>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>This Portifolio</ProjectsH2>
            <Button id="cardThree" onClick={openGitHub}>
              Code
            </Button>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2>More Projects</ProjectsH2>
            <ProjectsP>
              Take a look on my GitHub for more Front-End and Data Analytics
              Projects
            </ProjectsP>
            <Button id="cardMore" onClick={openGitHub}>
              More
            </Button>
          </ProjectsCard>
        </ProjectsWrapper>
        <Modal
          open={modalOpened}
          onClose={() => setModalOpened((prev) => !prev)}
        >
          <ModalBody />
        </Modal>
      </ProjectsContainer>
    </>
  );
}
