import styled, { IStyledComponent } from "styled-components";
import Card1 from "./cards1";


const Colecoes = (): JSX.Element => {
    return (
        <>
            <ContainerColecoes>
                <Title>{"Coleções em destaque"}</Title>
                <ListaCards>
                    <Card1 />
                    <Card1 />
                    <Card1 />
                </ListaCards>

                <SupTitle>{"Coleções em destaque"}</SupTitle>

            </ContainerColecoes>
        </>
    );
};

const ContainerColecoes: IStyledComponent<'web'> = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 34px 100.5px 124px;

    @media only screen and (max-width: 480px){
        padding: 34px 10px;
    }
`;
const Title: IStyledComponent<'web'> = styled.h3 `
    font-size: 24px;
    font-weight: bold;
    color: var(--Dark_Gray_2);
`;
const SupTitle: IStyledComponent<'web'> = styled.h3 `
    font-size: 24px;
    font-weight: bold;
    color: var(--Dark_Gray_2);
    text-align: center;
    margin-top: 100px;
`;

const ListaCards: IStyledComponent<'web'> = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: center;
`;

export default Colecoes;