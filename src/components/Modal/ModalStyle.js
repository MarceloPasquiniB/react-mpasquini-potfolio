import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(237, 218, 222, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 500px;
  padding: 24px;
  background-color: white;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.1px;
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled(ModalTitle)`
  font-weight: normal;
  line-height: 25px;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
