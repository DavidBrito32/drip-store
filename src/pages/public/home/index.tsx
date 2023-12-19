import styled, { IStyledComponent } from "styled-components";
import Carrousel from "../../../components/carrousel";
import Colecoes from "../../../components/colecoes_em_destaque";
import ProductsDestaque from "../../../components/products-destaque";
import BannerRodape from "../../../components/banner-rodape";

const Home = (): JSX.Element => {
  return(
        <>
            <ContainerHome>
                <Carrousel />
                <Colecoes />
                <ProductsDestaque />
                <BannerRodape />
            </ContainerHome>
        </>     
     );
};

const ContainerHome: IStyledComponent<"web"> = styled.main`

`;

export default Home;
