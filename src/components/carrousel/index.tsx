import styled from "styled-components";
import { useState, useEffect } from "react";
import { API } from "../../services/API";
import { AxiosResponse } from "axios";
interface StyleProps {
  $largura?: number;
  $slide?: number;
  key?: number | string;
  src?: string;
  alt?: string;
  $ctaColor?: string;
}
type Banner = {
  id: string;
  supTitle: string;
  title: string;
  description: string;
  ctaButtonText: string;
  ctaButtonColor: string;
  image: string;
};

const Carrousel = () => {
  const [slide, setSlide] = useState<number>(0);
  const [data, setData] = useState<Array<Banner>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getBanners = async (): Promise<void> => {
    await API.get("banners").then((dados: AxiosResponse<Array<Banner>>) => {
      setData(dados.data);
    }).catch((err) => {
      setError(err.message);
    })
    setLoading(false);
  }
  useEffect(()=>{
    getBanners();
  },[]);  

  return (
    <>
      <Container>
        <Items $largura={data.length} $slide={slide}>
          {loading && (<h1>Carregando...</h1>)}
          {error !== undefined && (<h1>{error}</h1>)}
          {data !== undefined &&
            data.map(
              (item: Banner): JSX.Element => (
                <Item key={item.id}>
                  <Conteudo>
                    <SupTitle>{item.supTitle}</SupTitle>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button $ctaColor={item.ctaButtonColor}>Ver Ofertas</Button>
                  </Conteudo>
                  <FigureImage src={item.image} alt="Tenis" />
                </Item>
              )
            )}
        </Items>
        <CarousselPagination>
          {data.map(
            (_item: Banner, index: number): JSX.Element => (
              <CarousselPaginationPill
                key={index}
                className={slide === index ? "active" : ""}
                onClick={() => setSlide(index)}
              />
            )
          )}
        </CarousselPagination>
      </Container>
    </>
  );
};

const Container = styled.div<StyleProps>`
  position: relative;
  background-color: var(--Light_Gray_3);
  padding: 80px 0;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    overflow-x: initial;
  }
`;

const Items = styled.div<StyleProps>`
  display: flex;
  width: calc(100vw * ${(props) => props.$largura || 1});
  position: relative;
  left: calc(-100vw * ${(props) => props.$slide || 0});
  transition-duration: 400ms;
`;

const Item = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  padding: 0 100px;
  width: 100vw;

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 0 10px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Conteudo = styled.div<StyleProps>`
  width: 45%;
  padding: 0 30px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 30px 0;
  }
`;

const SupTitle = styled.h6<StyleProps>`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);
  color: var(--Warning);

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    letter-spacing: none;
    text-align: center;
    color: var(--Primary);
    margin-top: 10px;
  }
`;

const Title = styled.h2<StyleProps>`
  font-weight: 800;
  font-size: 64px;
  line-height: 66px;
  color: var(--Dark_Gray_2);
  margin: 20px 0;

  @media only screen and (max-width: 480px) {
    font-size: 40px;
    text-align: center;
    line-height: 50px;
  }

  @media only screen and (min-width: 480px) and (max-width: 1024px) {
    font-size: 50px;
  }
`;

const Description = styled.p<StyleProps>`
  font-size: 18px;
  line-height: 34px;
  letter-spacing: var(--letter-spacing);
  color: var(--Dark_Gray_2);
  margin-bottom: 40px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const Button = styled.button<StyleProps>`
  width: 220px;
  height: 48px;
  border-radius: 5px;
  background-color: ${(props) => props.$ctaColor || "var(--Primary)"};
  color: var(--Light_Gray_3);
  font-weight: 700;
  letter-spacing: var(--Short-spaced);
  cursor: pointer;
  transition-duration: 200ms;
  border: none;
  &:hover {
    background-color: var(--Primary);
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const FigureImage = styled.img<StyleProps>`
  transform: rotate(-10deg);
  flex: 1;
  object-fit: none;

  @media only screen and (max-width: 480px) {
    width: 80vw;
    margin: 0 auto;
    flex: none;
    display: block;
    object-fit: contain;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 50vw;
    object-fit: contain;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50vw;
    object-fit: contain;
  }
`;

const CarousselPagination = styled.div<StyleProps>`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const CarousselPaginationPill = styled.div<StyleProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--Light_Gray_2);
  transition: all ease 200ms;
  cursor: pointer;

  &.active {
    background-color: var(--Primary);
  }

  &:active {
    scale: 0.9;
  }
`;
export default Carrousel;
