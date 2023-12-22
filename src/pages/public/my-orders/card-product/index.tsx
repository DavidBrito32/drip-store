import styled from "styled-components";
import Tenis from "./assets/Tenis.svg";
interface StyledProps {
  src?: string;
  alt?: string;
}

const CardProductCart = () => {
  return (
    <>
      <Container>
        <Product>
          <ContainerImage>
            <Image src={Tenis} alt="imagem" />
          </ContainerImage>
          <Infos>
            <Title>
              Tênis Nike Revolution 6 Next Nature Masculino Tênis Nike
              Revolution 6 Next Nature Masculino
            </Title>
            <Suptitle>
              Cor: <span>Vermelho / Branco</span>
            </Suptitle>
            <Suptitle>
              Tamanho: <span>42</span>
            </Suptitle>
          </Infos>
        </Product>
        <Quantity>
          <span className="Title">Quantidade</span>
          <Btn>-</Btn> 1 <Btn>+</Btn>
          <span>Remover item</span>
        </Quantity>

        <Price>
          <span>Unitario</span>
          <Discount>R$: 219,00</Discount>
          <Valor>R$: 219,00</Valor>
        </Price>

        <Price>
          <span>Total</span>
          <Discount>R$: 219,00</Discount>
          <Valor>R$: 219,00</Valor>
        </Price>
      </Container>
    </>
  );
};

const Container = styled.li<StyledProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px) {
    gap: 20px;
  }
`;
const Product = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContainerImage = styled.div<StyledProps>`
  width: 127px;
  height: 104px;
  display: flex;
  background-color: #e2e3ff;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img<StyledProps>`
  width: 90%;
  object-fit: contain;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: var(--Short-spaced);
  display: -webkit-box;
  max-width: 250px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Suptitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  & span {
    font-weight: 700;
  }
`;

const Quantity = styled.div`
  width: 115px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  & .Title {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    text-align: left;
    display: none;
  }

  & span {
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: var(--Short-spaced);
    text-decoration: underline;
    color: var(--Dark_Gray_2);
    cursor: pointer;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    width: 40%;
    & .Title {
      display: block;
    }
  }
`;

const Btn = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--Dark_Gray_2);
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition-duration: 0.2s;
  &:hover {
    background-color: var(--Light_Gray_2);
    color: var(--Primary);
    border-color: var(--Primary);
  }
  &:active {
    scale: 0.9;
  }
`;

const Price = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  & span {
    width: 100%;
    display: none;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    text-align: left;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    & span {
      display: block;
      width: fit-content;
    }
  }
`;

const Discount = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: var(--Light_Gray_2);
`;

const Valor = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: var(--Dark_Gray_2);
  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`;

export default CardProductCart;
