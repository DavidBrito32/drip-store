import styled, { IStyledComponent } from "styled-components";
import Carrousel from "../../../components/carrousel";
import Colecoes from "../../../components/colecoes_em_destaque";

const Home = (): JSX.Element => {
  return(
        <>
            <ContainerHome>
                <Carrousel />
                <Colecoes />
            </ContainerHome>
        </>     
     );
};

const ContainerHome: IStyledComponent<"web"> = styled.main`
min-height: 110vh;
`;

export default Home;
