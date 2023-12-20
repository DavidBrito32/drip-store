import styled from "styled-components";
import Input from "./styled/CheckBox";
import RadioButton from "./styled/RadioButton";

const FilterProduct = () => {
  return (
    <>
      <ContainerFilter>
        <Title>Filtrar por:</Title>
        <Hr />
        <ListFilter>
          <TitleDivsor>Marca</TitleDivsor>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Adiddas</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Calenciaga</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>K-Swiss</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Nike</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Puma</Legend>
          </Li>

          <TitleDivsor>Categoria</TitleDivsor>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Esporte e lazer</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Casual</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Utilitário</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Corrida</Legend>
          </Li>

          <TitleDivsor>Gênero</TitleDivsor>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Masculino</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Feminino</Legend>
          </Li>
          <Li>
            <Input name={"Nike"} defaultValue={false} alteraInput={() => {}} />
            <Legend>Unisex</Legend>
          </Li>

          <TitleDivsor>Estado</TitleDivsor>
          <Li>
            <RadioButton name={"Nike"} defaultValue={false} alteraInput={() => {}} /> 
            <Legend>Novo</Legend>
          </Li>
          <Li>
            <RadioButton name={"Nike"} defaultValue={false} alteraInput={() => {}} /> 
            <Legend>Usado</Legend>
          </Li>
         
        </ListFilter>
      </ContainerFilter>
    </>
  );
};

const ContainerFilter = styled.div`
  width: 310px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  background-color: var(--White);
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);
`;

const TitleDivsor = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  margin: 10px 0;
`;

const ListFilter = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Hr = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--Light_Gray_2);
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Legend = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: var(--Dark_Gray_2);
`;

export default FilterProduct;
