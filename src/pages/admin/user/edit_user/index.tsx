import styled from "styled-components";
import Modal from "../../../../components/modal";
import { FiXCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { TUser } from "../types/types";
import { PiPasswordDuotone } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { API } from "../../../../services/API";
import { Select } from "../../styles/styles";

type Props = {
  modal: boolean;
  toogleEdit: () => void;
  getAllUsers: () => Promise<void>;
  id: number;
};

const EditUser = ({
  modal,
  toogleEdit,
  getAllUsers,
  id,
}: Props): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<TUser>();

  const editUser = async (data: TUser | undefined): Promise<void> => {
    await API.put(`/users/${id}`, data)
      .then(() => {
        toogleEdit();
        getAllUsers();
        reset();
        console.log("usuario editado com sucesso!");
      })
      .catch((er) => {
        console.log(er.response.data);
      });
  };
  return (
    <>
      <Modal state={modal}>
        <EditUserContainer>
          <span>
            <FiXCircle onClick={() => toogleEdit()} className="icone" />
          </span>
          <SubTitle>Editar um usuario</SubTitle>
          <FormUser onSubmit={handleSubmit(editUser)}>
            <Label>
              {"Novo nome de usuario"}
              <Input
                type="text"
                placeholder="Digite o nome do usuario"
                {...register("user_name")}
              />
              <FaRegUser className="figure" />
            </Label>
            <Label>
              {"Nova Senha temporaria"}
              <Input
                type="text"
                placeholder="Digite a senha temporaria do usuario"
                {...register("user_password")}
              />
              <PiPasswordDuotone className="figure" />
            </Label>
            <Label>
              {"Tipo de usuario"}
              <div className="opt">
                <Select {...register("user_level")}>
                  <option value={1}>Admin</option>
                  <option value={2}>operador</option>
                </Select>
              </div>
            </Label>
            <BtnCriar type="submit">{"Editar usuario"}</BtnCriar>
          </FormUser>
        </EditUserContainer>
      </Modal>
    </>
  );
};

const SubTitle = styled.h3`
  font-size: 22px;
  color: var(--Dark_Gray_2);
  & span {
    font-style: italic;
    color: var(--Dark_Gray);
    font-weight: bolder;
  }
`;

const FormUser = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EditUserContainer = styled.div`
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

const Input = styled.input`
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

export default EditUser;
