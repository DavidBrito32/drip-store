import styled from "styled-components";
import FilterProduct from "../../../components/filter-product";
import CardProduct from "../../../components/card-product";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";

interface Flags {
  filter: boolean;
}

const Products = (): JSX.Element => {
  const [flags, setFlags] = useState<Flags>({
    filter: false,
  });

  const toogleFilter = (): void =>
    setFlags({ ...flags, filter: !flags.filter });
  return (
    <>
      <ContainerProducts>
        <Heading>
          <BreadCrumps>Resultados para “Tênis” - 389 produtos</BreadCrumps>
          <SelectOptions>
            <Option>Ordenar por: mais relevantes</Option>
            <Option>Ordenar por: Promoção</Option>
            <Option>Ordenar por: Primavera</Option>
            <Option>Ordenar por: Seleção Exclusiva de natal</Option>
          </SelectOptions>
          <BtnFilter onClick={toogleFilter}>
            <CiFilter className={"icon"} />
          </BtnFilter>
        </Heading>

        <Filtro className={flags.filter ? "active" : ""}>
            <span onClick={toogleFilter}>X</span>
          <FilterProduct />
        </Filtro>

        <ProductsList>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ProductsList>
      </ContainerProducts>
    </>
  );
};

const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 100px 140px;
  gap: 30px;
  background-color: var(--Light_Gray_3);
  position: relative;

  @media only screen and (max-width: 480px) {
    padding: 20px 10px 140px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 20px 10px 140px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1500px){
    padding: 20px 20px 140px;
  }
  
  `;

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 390px){
    gap: 0;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 10px;
  }
`;

const Filtro = styled.div`
    & span{
        display: none;
    }


  @media only screen and (max-width: 480px) {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    transition-duration: 0.2s;
    visibility: hidden;
    opacity: 0;

        & span {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 3.5%;
            right: 10%;
            font-size: 20px;
                &:hover, &:active{
                    background-color: var(--Primary);
                    color: white;
                }
        }

    &::after {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100%;
      background-color: #00000085;
      top: 0;
      right: -115px;
      z-index: -1;
    }

    &.active {
      width: fit-content;
      visibility: visible;
      opacity: 1;
    }
  }

  
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    transition-duration: 0.2s;
    visibility: hidden;
    opacity: 0;

        & span {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 3.5%;
            right: 25%;
            font-size: 20px;
                &:hover, &:active{
                    background-color: var(--Primary);
                    color: white;
                }
        }

    &::after {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100%;
      background-color: #00000085;
      top: 0;
      right: -100%;
      z-index: -1;
    }

    &.active {
      width: 50%;
      max-height: fit-content;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const BreadCrumps = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);

  /* @media only screen and (max-width: 480px){
        display: none;
    } */
`;

const SelectOptions = styled.select`
  width: 332px;
  height: 60px;
  border-color: var(--Dark_Gray_2);
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  border-width: 2px;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    border-color: var(--Primary);
  }

  @media only screen and (max-width: 390px){
    width: 80%;
  }
`;

const Option = styled.option`
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-align: center;
`;

const ProductsList = styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
`;

const BtnFilter = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: var(--Primary);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  transition-duration: 0.1s;

  & .icon {
    width: 34px;
    height: 34px;
    color: white;
  }

  &:active {
    scale: 0.9;
  }

  @media only screen and (max-width: 390px){
    width: 50px;
    height: 50px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export default Products;
