import { FaPencilAlt, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import {
  ActionProduct,
  Box,
  Btn,
  BtnsContainer,
  Container,
  SubTitle,
  Table,
  Title,
} from "../styles/styles";

const Collections = () => {
  return (
    <>
      <Container>
        <Title>Gerenciamento de coleções</Title>
        <SubTitle>
          Bem vindo <span>Usuario</span>
        </SubTitle>

        <ActionProduct>
          <SubTitle>Lista de coleções</SubTitle>
          <BtnsContainer>
            <Btn>
              <FaPlus className="icone" />
              Nova coleção
            </Btn>
          </BtnsContainer>
        </ActionProduct>

        <Table>
          <thead>
            <tr className="cabecalho">
              <th>Sup-Titulo do banner</th>
              <th>Titulo do banner</th>
              <th>Sub-Titulo do banner</th>
              <th>Imagem do banner</th>
              <th>Texto do botao</th>
              <th>Action buttons</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Aproveite a oferta</td>
              <td>Sistema de som ultra potente</td>
              <td>Sistema de som ultra potente</td>
              <td>
                <img
                  src="https://tvlar.vtexassets.com/arquivos/ids/19907008-800-auto?v=637928249613770000&width=800&height=auto&aspect=true"
                  alt="caixa de som"
                />
              </td>
              <td>Garanta o seu</td>
              <td>
                <Box>
                  <Btn>
                    <FaPencilAlt className={"icone"} />
                  </Btn>
                  <Btn>
                    <FaRegTrashAlt className={"icone"} />
                  </Btn>
                </Box>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Collections;
