import styled from "styled-components";
import Banner from "./assets/Banner-Rodape.svg";

interface StyledProps {
  src?: string;
  alt?: string;
}

const BannerRodape = (): JSX.Element => {
  return (
    <>
      <ContainerRodape>
        <ContainerImage>
          <Picture src={Banner} alt="Banner Exclusive" />
        </ContainerImage>
        <Infos>
          <SupTitle>{"Oferta Especial"}</SupTitle>
          <Title>{"Air Jordan edição de colecionador"}</Title>
          <Description>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
            }
          </Description>
          <Button>{"Ver Oferta"}</Button>
        </Infos>
      </ContainerRodape>
    </>
  );
};

const ContainerRodape = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px 90px;

  @media only screen and (max-width: 480px) {
    padding: 100px 20px;
    gap: 80px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 20px 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1599px){
    padding: 80px 50px;
  }

`;

const ContainerImage = styled.div<StyledProps>`
  width: 50%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    width: 466px;
    height: 466px;
    border-radius: var(--Rounded_Full);
    background: var(--Secundary_G);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    &::after {
      width: 266px;
      height: 266px;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 50%;
    &::after {
      width: 266px;
      height: 266px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1599px){
    width: 50%;
    &::after{
        width: 400px;
        height: 400px;
    }
  }

`;

const Picture = styled.img<StyledProps>`
  width: 95%;
  position: relative;
  object-fit: contain;
  z-index: 1;

  @media only screen and (max-width: 480px) {
    width: 75%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1599px){
    width: 75%;
  }

  @media only screen and (min-width: 1600px){
    width: 65%;
  }
`;

const Infos = styled.div<StyledProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px){
    gap: 0;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 1600px){
    width: 40%;
  }

  
`;

const SupTitle = styled.h3<StyledProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Primary);
  @media only screen and (max-width: 480px) {
    color: var(--Warning);
  }
`;

const Title = styled.h1<StyledProps>`
  font-size: 48px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: var(--Large-spaced);
  color: var(--Dark_Gray_2);
  @media only screen and (max-width: 480px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p<StyledProps>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: var(--Large-spaced);
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px){
    font-size: 14px;
  }
`;

const Button = styled.button<StyledProps>`
  width: 200px;
  height: 40px;
  border-radius: var(--Rounded_Default);
  background-color: var(--Primary);
  color: var(--White);
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  cursor: pointer;
  border: none;
`;

export default BannerRodape;
