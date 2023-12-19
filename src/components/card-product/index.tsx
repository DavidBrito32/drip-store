import styled from "styled-components";

interface StyledProps {
  src?: string;
  alt?: string;
}

const CardProduct = () => {
  return (
    <>
      <ContainerProd>
        <ContainerImage>
          <Pill>30% OFF</Pill>
          <Image
            src={
              "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/tenis-nike-revolution-6-next-nature-ae3e5df45b9645eab909ce5293ca7a27.jpeg"
            }
            alt={"Imagem"}
          />
        </ContainerImage>
        <Category>{"Tênis"}</Category>
        <TitleProduct>{"K-Swiss V8 - Masculino"}</TitleProduct>
        <ContainerPrice>
          <Discount>{"$ 200"}</Discount>
          <Price>{"$ 100"}</Price>
        </ContainerPrice>
      </ContainerProd>
    </>
  );
};

const ContainerProd = styled.li`
  width: 292px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  transition-duration: .1s;

  @media only screen and (max-width: 480px) {
    width: 163px;
  }
`;

const ContainerImage = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--Light_Gray_3);
  transition-duration: .1s;

  @media only screen and (max-width: 480px) {
    height: 173px;
  }
`;

const Pill = styled.span`
  width: 96px;
  height: 32px;
  border-radius: var(--Pill-Rounded);
  background-color: var(--Attention);
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Dark_Gray_2);
  font-weight: bold;
  transition-duration: .1s;

  @media only screen and (max-width: 480px) {
    width: 88px;
    font-size: 12px;
  }
`;

const Image = styled.img<StyledProps>`
  display: block;
  width: 90%;
  object-fit: contain;
`;

const Category = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);
  color: var(--Light_Gray);
  margin-top: 18px;
`;

const TitleProduct = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: var(--Short-spaced);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition-duration: .1s;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContainerPrice = styled.div`
  display: flex;
  gap: 12px;
`;

const Price = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  transition-duration: .1s;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const Discount = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: var(--Short-spaced);
  color: var(--Light_Gray);
  transition-duration: .1s;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export default CardProduct;
