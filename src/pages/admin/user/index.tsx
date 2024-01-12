import styled from "styled-components";
import { FaPlus, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TUser } from "./types/types";
import { API } from "../../../services/API";
import CreateUser from "./create_user";
import EditUser from "./edit_user";

type Flags = {
  createUser: boolean;
  AdminType: boolean;
  OperatorType: boolean;
  editUser: boolean;
  deleteUser: boolean;
  confirmDelete: boolean;
};

const User = (): JSX.Element => {
  const [flags, setFlags] = useState<Flags>({
    createUser: false,
    editUser: false,
    AdminType: false,
    OperatorType: true,
    deleteUser: false,
    confirmDelete: false,
  });

  const [usuarios, setUsuarios] = useState<Array<TUser>>([]);
  const [id, setId] = useState<number>(0);

  const toogleUser = () =>
    setFlags({ ...flags, createUser: !flags.createUser });

  const toogleUserEdit = (id: number) => {
    setFlags({ ...flags, editUser: !flags.editUser });
    setId(id);
  };

  const deleteUser = async (id: number) => {
    await API.delete(`/users/${id}`)
      .then(() => {
        console.log("deletado com sucesso");
        getAllUsers();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getAllUsers = async () => {
    await API.get("/users").then((item) => {
      setUsuarios(item.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
              {usuarios &&
                usuarios.map((item, index) => (
                  <tr key={index}>
                    <td>{item.user_name}</td>
                    <td>{item.user_email}</td>
                    <td className="userType">
                      {item.user_level === 1 ? "Admin" : "Operador"}
                    </td>
                    <td className="botoes">
                      <Box>
                        <Btn onClick={() => toogleUserEdit(item.user_id)}>
                          <FaPencilAlt className={"icone"} />
                        </Btn>
                        <Btn onClick={() => deleteUser(item.user_id)}>
                          <FaRegTrashAlt className={"icone"} />
                        </Btn>
                      </Box>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </ListUsers>

        {/* {CRIACAO DE USUARIO} */}
        <CreateUser
          modal={flags.createUser}
          toogleUser={toogleUser}
          getAllUsers={getAllUsers}
        />

        {/* {EDICAO DE USUARIO} */}
        <EditUser
          modal={flags.editUser}
          getAllUsers={getAllUsers}
          toogleEdit={() => setFlags({ ...flags, editUser: !flags.editUser })}
          id={id}
        />
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
  &.delete {
    text-align: center;
  }
  & span {
    font-style: italic;
    color: var(--Dark_Gray);
    font-weight: bolder;
  }
`;

// const DeleteUser = styled.div`
//   width: 500px;
//   padding: 30px;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 1px 1px 40px 10px #00000088;
//   display: flex;
//   gap: 30px;
//   position: relative;
//   flex-direction: column;
//   & span {
//     position: absolute;
//     right: 10px;
//     top: 10px;
//     & .icone {
//       width: 30px;
//       height: 30px;
//       cursor: pointer;
//       transition-duration: 0.2s;
//       &:hover {
//         color: var(--Primary);
//         scale: 1.1;
//       }
//       &:active {
//         scale: 0.97;
//       }
//     }
//   }
// `;

const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &.delete {
    justify-content: center;
  }
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
