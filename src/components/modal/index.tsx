import styled from "styled-components";

type Props = {
  children: JSX.Element;
  state: boolean;
};

const Modal = (Props: Props): JSX.Element => {
  return (
    <>
      <ModalContainer className={Props.state ? "active" : ""}>
        {Props.children}
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000085;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition-duration: 0.4s;
  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export default Modal;
