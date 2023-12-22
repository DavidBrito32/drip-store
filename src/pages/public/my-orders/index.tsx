import styled from "styled-components";
import CardProductCart from "./card-product";

const MyOrders = (): JSX.Element => {
  return (
    <>
      <ContainerCart>
        <Cart>
          <BoxFull>
            <Title>MEU CARRINHO</Title>
            <Legenda>
              <Text>Quantidade</Text>
              <Text>Unitario</Text>
              <Text>Total</Text>
            </Legenda>
          </BoxFull>
          <Hr />
          <Products>
            <CardProductCart />
          </Products>
          <Hr />
          <BoxFull>
            <Box>
              <SubTitle>Cupom de desconto</SubTitle>
              <Input placeholder="Insira seu código" />
              <Btn>OK</Btn>
            </Box>
            <Box>
              <SubTitle>Calcular Frete</SubTitle>
              <Input placeholder="Insira seu CEP" />
              <Btn>OK</Btn>
            </Box>
          </BoxFull>
        </Cart>

        <Resumo>
          <Title>RESUMO</Title>
          <Hr />
          <TextResumo>
            Sub Total <span>R$: 219,00</span>{" "}
          </TextResumo>
          <TextResumo>
            Frete <span>R$: 0,00</span>{" "}
          </TextResumo>
          <TextResumo>
            Desconto <span>R$: 30,00</span>{" "}
          </TextResumo>

          <Subtotal>
            <Title2>
              Total <span>R$: 219,00</span>
            </Title2>
            <p>Ou em 10x de R$ 21,00 sem juros</p>
            <button>Continuar</button>
          </Subtotal>
        </Resumo>
      </ContainerCart>
    </>
  );
};

const ContainerCart = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: var(--Light_Gray_3);
  padding: 80px 100px 100px;

  @media only screen and (max-width: 480px) {
    padding: 20px 20px 100px;
  }
`;

const Cart = styled.div`
  width: 890px;
  /* height: 365px; */
  min-height: 355px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: var(--White);
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Products = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 !important;
`;

const Title = styled.h3`
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  display: flex;
  justify-content: space-between;
`;
const Title2 = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--Dark_Gray_2);
`;

const Legenda = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const BoxFull = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 25px 0;
  }
`;

const Input = styled.input`
  width: 70%;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: var(--Light_Gray_3);
  font-size: 16px;
  padding-left: 20px;
  border: 1px solid transparent;
  transition-duration: 0.3s;
  &:focus {
    border-color: var(--Primary);
  }
  &::placeholder {
    color: var(--Dark_Gray_3);
  }
`;

const Btn = styled.div`
  width: 25%;
  height: 60px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  background-color: var(--Light_Gray_3);
  color: var(--Primary);
  transition-duration: 0.2s;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: var(--Light_Gray_2);
    border-color: var(--Primary);
  }
  &:active {
    scale: 0.9;
  }
`;

const SubTitle = styled.h3`
  width: 100%;
  color: var(--Dark_Gray_2);
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
`;

const Text = styled.h3`
  width: 115px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: var(--Dark_Gray_2);
  text-align: center;
  display: flex;
`;

const TextResumo = styled.h3`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: var(--Light_Gray_2);
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    color: var(--Dark_Gray_2);
  }
`;

const Resumo = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  height: 365px;
  min-height: 365px;
  padding: 30px;
  gap: 20px;
  background-color: var(--White);

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Subtotal = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & p {
    width: 100%;
    color: var(--Light_Gray_2);
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 1px;
    text-align: right;
      &:hover{
        text-decoration: underline;
      }
  }

  & button {
    width: 100%;
    background-color: var(--Warning);
    color: var(--White);
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default MyOrders;
