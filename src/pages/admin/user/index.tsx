import styled from "styled-components";
import { FaPlus, FaRegUser, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";
import { PiPasswordDuotone } from "react-icons/pi";
import Modal from "../../../components/modal";
import { useState } from "react";

type FormsTypes = {
  placeHolder?: string;
  alt?: string;
  type?: string;
};

interface StyledProps {
  type?: string;
  src?: string;
  alt?: string;
  style?: string;
  className?: string;
  name?: string;
  value?: string | number | boolean | undefined;
}

type Flags = {
  createUser: boolean;
  AdminType: boolean;
  OperatorType: boolean;
  editUser: boolean;
};

const User = (): JSX.Element => {
  const [flags, setFlags] = useState<Flags>({
    createUser: false,
    editUser: false,
    AdminType: false,
    OperatorType: true,
  });

  const toogleUser = () =>
    setFlags({ ...flags, createUser: !flags.createUser });
  const toogleUserEdit = () =>
    setFlags({ ...flags, editUser: !flags.editUser });
  const toogleAdminType = () =>
    setFlags({ ...flags, AdminType: !flags.AdminType, OperatorType: false });
  const toogleOperatorType = () =>
    setFlags({ ...flags, OperatorType: !flags.OperatorType, AdminType: false });
  return (
    <>
      <Container>
        <Title>Gerenciamento de usuarios</Title>
        <SubTitle>
          Olá seja bem vindo <span>{"Usuario"}</span>
        </SubTitle>
        <ListUsers>
          <ActionUsers>
            <SubTitle>Lista de Usuarios</SubTitle>
            <BtnsContainer>
              <Btn onClick={toogleUser}>
                {" "}
                <FaPlus className="icone" /> Cadastrar novo usuario
              </Btn>
            </BtnsContainer>
          </ActionUsers>

          <Table>
            <thead>
              <tr className="cabecalho">
                <th>Usuarios</th>
                <th>E-mail</th>
                <th>Tipo de usuario</th>
                <th>Acoes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>David Brito</td>
                <td>david@email.com</td>
                <td className="userType">Admin</td>
                <td className="botoes">
                  <Box>
                    <Btn onClick={toogleUserEdit}>
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
        </ListUsers>

        {/* {CRIACAO DE USUARIO} */}
        <Modal state={flags.createUser}>
          <CreateUser>
            <span>
              <FiXCircle onClick={toogleUser} className="icone" />
            </span>
            <SubTitle>Criar um novo usuario</SubTitle>
            <FormUser>
              <Label>
                {"Nome do usuario"}
                <Input type="text" placeHolder="Digite o nome do usuario" />
                <FaRegUser className="figure" />
              </Label>
              <Label>
                {"E-mail do usuario"}
                <Input type="text" placeHolder="Digite o email do usuario" />
                <MdOutlineMailOutline className="figure" />
              </Label>
              <Label>
                {"Senha temporaria"}
                <Input
                  type="text"
                  placeHolder="Digite a senha temporaria do usuario"
                />
                <PiPasswordDuotone className="figure" />
              </Label>
              <Label>
                {"Tipo de usuario"}
                <div className="opt">
                  <BoxInput
                    onClick={toogleAdminType}
                    className={flags.AdminType ? "active" : ""}
                  >
                    <Checked className={flags.AdminType ? "active" : ""} />
                    <Check />
                  </BoxInput>
                  {"Admin"}
                  <BoxInput
                    onClick={toogleOperatorType}
                    className={flags.OperatorType ? "active" : ""}
                  >
                    <Checked className={flags.OperatorType ? "active" : ""} />
                    <Check />
                  </BoxInput>
                  {"Operador"}
                </div>
              </Label>
              <BtnCriar>{"Criar usuario"}</BtnCriar>
            </FormUser>
          </CreateUser>
        </Modal>

        {/* {EDICAO DE USUARIO} */}
        <Modal state={flags.editUser}>
          <CreateUser>
            <span>
              <FiXCircle onClick={toogleUserEdit} className="icone" />
            </span>
            <SubTitle>Editar usuario</SubTitle>
            <FormUser>
              <Label>
                {"Nome do usuario"}
                <Input type="text" placeHolder="Digite o nome do usuario" />
                <FaRegUser className="figure" />
              </Label>
              <Label>
                {"E-mail do usuario"}
                <Input type="text" placeHolder="Digite o email do usuario" />
                <MdOutlineMailOutline className="figure" />
              </Label>
              <Label>
                {"Senha temporaria"}
                <Input
                  type="text"
                  placeHolder="Digite a senha temporaria do usuario"
                />
                <PiPasswordDuotone className="figure" />
              </Label>
              <Label>
                {"Tipo de usuario"}
                <div className="opt">
                  <BoxInput
                    onClick={toogleAdminType}
                    className={flags.AdminType ? "active" : ""}
                  >
                    <Checked className={flags.AdminType ? "active" : ""} />
                    <Check />
                  </BoxInput>
                  {"Admin"}
                  <BoxInput
                    onClick={toogleOperatorType}
                    className={flags.OperatorType ? "active" : ""}
                  >
                    <Checked className={flags.OperatorType ? "active" : ""} />
                    <Check />
                  </BoxInput>
                  {"Operador"}
                </div>
              </Label>
              <BtnCriar>{"Criar usuario"}</BtnCriar>
            </FormUser>
          </CreateUser>
        </Modal>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 32px;
  color: var(--Dark_Gray_2);
`;
const ListUsers = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ActionUsers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.h3`
  font-size: 22px;
  color: var(--Dark_Gray_2);
  & span {
    font-style: italic;
    color: var(--Dark_Gray);
    font-weight: bolder;
  }
`;

const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px 10px;
  border-radius: 4px;
  color: var(--White);
  background-color: var(--Primary);
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition-duration: 0.2s;
  font-size: 16px;

  &:hover {
    box-shadow: 1px 2px 5px 2px #00000065;
  }
  &:active {
    scale: 0.97;
  }

  & .icone {
    width: 18px;
    height: 18px;
    color: white;
  }
`;

const CreateUser = styled.div`
  width: 500px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 40px 10px #00000088;
  display: flex;
  gap: 30px;
  position: relative;
  flex-direction: column;
  & span {
    position: absolute;
    right: 10px;
    top: 10px;
    & .icone {
      width: 30px;
      height: 30px;
      cursor: pointer;
      transition-duration: 0.2s;
      &:hover {
        color: var(--Primary);
        scale: 1.1;
      }
      &:active {
        scale: 0.97;
      }
    }
  }
`;

const FormUser = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  color: var(--Light_Gray);
  position: relative;
  margin: 10px 0;

  & .figure {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 20px;
    bottom: 15px;
    transition-duration: 0.2s;
  }

  & .opt {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const Input = styled.input<FormsTypes>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: var(--Light_Gray_2);
  padding-left: 20px;
  transition-duration: 0.2s;
  color: var(--Dark_Gray_2);
  font-size: 14px;
  font-weight: bold;
  &:focus {
    border-color: var(--Primary);
    & + .figure {
      color: var(--Primary);
    }
  }

  &::placeholder {
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const BoxInput = styled.div<StyledProps>`
  width: 22px;
  height: 22px;
  overflow: hidden;
  border-radius: 2px;
  position: relative;
  transition-duration: 0.2s;
  border: 1px solid var(--Light_Gray_2);
  &.active {
    background-color: var(--Primary);
  }
`;

const Check = styled.input<StyledProps>`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background-color: transparent;
  opacity: 0;
`;

const Checked = styled.div<StyledProps>`
  width: 0%;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-top: 4px solid var(--White);
  border-right: 4px solid var(--White);
  top: 40%;
  left: 40%;
  z-index: 1;
  /* transform: translate(-40%, -40%) rotate(135deg); */
  z-index: 0;
  transition-duration: 0.3s;
  cursor: pointer;
  scale: 0;

  &.active {
    width: 80%;
    height: 8px;
    transform: translate(-40%, -40%) rotate(135deg);
    scale: 1;
  }
`;

const BtnCriar = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--White);
  background-color: var(--Primary);
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: 1px 2px 5px 2px #00000065;
  }
  &:active {
    scale: 0.97;
  }
`;

const Table = styled.table`
  width: 100%;
  & tr {
    height: 50px;
    border-radius: 4px;
    text-align: center;

    &.cabecalho {
      background-color: #434356;
      color: white;
    }
    &:nth-child(even) {
      background-color: var(--Light_Gray_2);
    }

    & .botoes {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 50px;
    }

    & td {
      font-size: 16px;
      font-weight: bold;

      &.userType {
        color: green;
      }
    }
  }
`;

const Box = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default User;
