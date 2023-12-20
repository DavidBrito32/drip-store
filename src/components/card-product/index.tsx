import styled from "styled-components";
import Tenis from './assets/Tenis.svg'

interface StyledProps {
  src?: string;
  alt?: string;
}

type Props = {
  discount?: string,
  image?: string,
  category?: string,
  price?: number,
  oldPrice?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardProduct = (_props: Props) => {
  return (
    <>
      <ContainerProd>
        <ContainerImage>
          <Pill>{"30% OFF"}</Pill>
          <Image
            src={
              Tenis
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

const ContainerProd = styled.li<StyledProps>`
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

const ContainerImage = styled.div<StyledProps>`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--White);
  transition-duration: .1s;

  @media only screen and (max-width: 480px) {
    height: 173px;
  }
`;

const Pill = styled.span<StyledProps>`
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
  object-fit: contain;
`;

const Category = styled.h3<StyledProps>`
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);
  color: var(--Light_Gray);
  margin-top: 18px;
`;

const TitleProduct = styled.h1<StyledProps>`
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

const ContainerPrice = styled.div<StyledProps>`
  display: flex;
  gap: 12px;
`;

const Price = styled.h3<StyledProps>`
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

const Discount = styled.span<StyledProps>`
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
