import styled from "styled-components";
import CardProduct from "../card-product";
import { Link } from "react-router-dom";

const ProductsDestaque = () => {
  return (
    <>
      <ContainerProd>
        <TitleSection>
          {"Produtos em alta"} <Link to={"#"}>{"Ver Todos ➡"}</Link>
        </TitleSection>
        <ListProducts>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ListProducts>
      </ContainerProd>
    </>
  );
};

const ContainerProd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px 100px 100px;
  background-color: var(--Light_Gray_3);

  @media only screen and (max-width: 480px) {
    padding: 50px 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 0 10px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1499px){
    padding: 38px 10px 100px;
  }
`;

const TitleSection = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & a {
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: var(--Short-spaced);
    color: var(--Primary);
    transition-duration: 0.1s;
    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0 35px;
    justify-content: space-around;
    font-size: 18px;

    & a {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    justify-content: space-around;
  }

  @media only screen and (min-width: 1024px){
    padding: 0 60px;
  }
`;

const ListProducts = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ProductsDestaque;
