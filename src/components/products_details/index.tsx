import styled from "styled-components";
import Nike from "./assets/Nike.svg";
import { FaRegStar, FaStar } from "react-icons/fa6";
import CardProduct from "../card-product";
import { Link } from "react-router-dom";

interface StyledProps {
  $bgColor?: string;
  src?: string;
  alt?: string;
}

const ProductsDetails = (): JSX.Element => {
  return (
    <>
      <DetailsContainer>
        <BreadCrumps>
          Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
          Masculino
        </BreadCrumps>

        <ContainerImages>
          <MainPictureContainer>
            <Paginator className="left" />
            <Image src={Nike} alt="Imagem do Tênis" />
            <Paginator className="right" />
          </MainPictureContainer>
          <ContainerTumbs>
            <Tumbnails>
              <ImageTumbnails src={Nike} alt="Imagem do Tênis" />
            </Tumbnails>

            <Tumbnails>
              <ImageTumbnails src={Nike} alt="Imagem do Tênis" />
            </Tumbnails>

            <Tumbnails>
              <ImageTumbnails src={Nike} alt="Imagem do Tênis" />
            </Tumbnails>

            <Tumbnails>
              <ImageTumbnails src={Nike} alt="Imagem do Tênis" />
            </Tumbnails>

            <Tumbnails>
              <ImageTumbnails src={Nike} alt="Imagem do Tênis" />
            </Tumbnails>
          </ContainerTumbs>
        </ContainerImages>

        <ContainerDetails>
          <TitleProduct>
            {"Tênis Nike Revolution 6 Next Nature Masculino"}
          </TitleProduct>
          <SubTitle>{"Casual | Nike | REF:38416711"}</SubTitle>
          <HatingContainer>
            <StartsContainer>
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaRegStar className="icon" />
            </StartsContainer>
            <Hate>
              4.7 <FaStar className="icon" />{" "}
            </Hate>

            {"(90 Avaliações)"}
          </HatingContainer>

          <PriceContainer>
            <Moeda>R$</Moeda>
            <Price>
              219,<Cents>00</Cents>
            </Price>
            <Discount>219,00</Discount>
          </PriceContainer>

          <DescriptionContainer>
            <DescriptionTitle>Descrição do Produto</DescriptionTitle>
            <Description>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              }
            </Description>
          </DescriptionContainer>

          <ContainerTamanho>
            <Legend>Tamanho</Legend>
            <BoxTamanho>39</BoxTamanho>
            <BoxTamanho>40</BoxTamanho>
            <BoxTamanho className="active">41</BoxTamanho>
            <BoxTamanho>42</BoxTamanho>
            <BoxTamanho>43</BoxTamanho>
            <Legend>Cor</Legend>
            <ColorProduct $bgColor="red" />
            <ColorProduct $bgColor="blue" />
            <ColorProduct className="active" $bgColor="brown" />
            <ColorProduct $bgColor="gray" />
          </ContainerTamanho>

          <BtnComprar>Comprar</BtnComprar>
        </ContainerDetails>

        <ListProducts>
          <TitleSection>
            {"Produtos relacionados"}
            <Link to={"/products"}>{"Ver Todos ➡"}</Link>
          </TitleSection>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ListProducts>
      </DetailsContainer>
    </>
  );
};

const DetailsContainer = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 100px 100px;
  background-color: var(--Light_Gray_3);

  @media only screen and (max-width: 330px) {
    padding: 20px 10px 100px;
  }

  @media only screen and (min-width: 331px) and (max-width: 480px) {
    padding: 20px 20px 100px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 20px 30px 100px;
  }
`;

const BreadCrumps = styled.h3<StyledProps>`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  margin-bottom: 40px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.5px;
  }
`;

const ContainerImages = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 50%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    height: 50%;
  }
`;

const Paginator = styled.div`
  width: 22px;
  height: 22px;
  border-top: 3px solid var(--Dark_Gray_2);
  border-right: 3px solid var(--Dark_Gray_2);
  position: absolute;
  cursor: pointer;
  transition-duration: 0.2s;
  @media only screen and (max-width: 480px) {
    width: 12px;
    height: 12px;
  }

  &:hover {
    scale: 1.1;
    border-color: var(--Primary);
  }
  &:active {
    scale: 0.9;
    border-color: var(--Light_Gray_2);
  }

  &.right {
    top: 50%;
    right: 20px;
    transform: translateY(-50%) rotate(45deg);
  }
  &.left {
    top: 50%;
    left: 20px;
    transform: translateY(-50%) rotate(-140deg);
  }
`;

const MainPictureContainer = styled.div<StyledProps>`
  width: 100%;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e3ff;
  position: relative;
  @media only screen and (max-width: 480px) {
    height: 250px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    height: 400px;
  }
`;

const Image = styled.img<StyledProps>`
  display: block;
  width: 70%;
  object-fit: contain;
`;

const ContainerTumbs = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ImageTumbnails = styled.img<StyledProps>`
  display: block;
  width: 70%;
  object-fit: contain;
`;

const Tumbnails = styled.div<StyledProps>`
  width: 120px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  border-radius: 4px;

  @media only screen and (max-width: 1024px) {
    width: 65px;
    height: 55px;
  }
`;

const ContainerDetails = styled.div<StyledProps>`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-left: 40px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-top: 50px;
  }
`;

const TitleProduct = styled.h1<StyledProps>`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: var(--Large-spaced);

  @media only screen and (max-width: 480px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 22px;
  }
`;

const SubTitle = styled.h3<StyledProps>`
  margin: 12px 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: var(--Short-spaced);
`;

const HatingContainer = styled.div<StyledProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
`;

const StartsContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  & .icon {
    width: 15px;
    height: 15px;
    color: var(--Warning);
  }
`;

const Hate = styled.h4<StyledProps>`
  width: 65px;
  height: 25px;
  border-radius: 4px;
  background-color: var(--Warning);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: var(--White);
  gap: 5px;

  & .icon {
    color: white;
  }
`;

const PriceContainer = styled.div<StyledProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 25px;
`;

const Moeda = styled.h4<StyledProps>`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  line-height: 28px;
`;

const Price = styled.h2<StyledProps>`
  font-size: 32px;
  font-weight: 700;
  line-height: 24px;
  color: var(--Dark_Gray);
`;

const Cents = styled.span<StyledProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
  color: var(--Dark_Gray);
`;

const Discount = styled.h4<StyledProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: var(--Short-spaced);
  color: var(--Light_Gray_2);
  text-decoration: line-through;
`;

const DescriptionContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

const DescriptionTitle = styled.h2<StyledProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Light_Gray);
`;

const Description = styled.p<StyledProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: var(--Dark_Gray_2);
`;

const ContainerTamanho = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;

const Legend = styled.h3<StyledProps>`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Light_Gray);
`;

const BoxTamanho = styled.div<StyledProps>`
  border: 1px solid var(--Light_Gray_2);
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  transition-duration: 0.3s;
  &:hover {
    background-color: var(--Light_Gray_2);
  }
  &.active {
    background-color: var(--Primary);
    color: var(--White);
  }
`;

const ColorProduct = styled.div<StyledProps>`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &.active {
    border: 2px solid var(--Primary);
  }

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.$bgColor || "green"};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BtnComprar = styled.button`
  margin-top: 30px;
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Warning);
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: bolder;
  color: var(--White);
  letter-spacing: var(--Short-spaced);
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ListProducts = styled.ul`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  margin: 20px 0;
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
    font-size: 18px;

    & a {
      font-size: 14px;
    }
  }
`;

export default ProductsDetails;
