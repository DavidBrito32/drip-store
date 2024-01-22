import styled, { IStyledComponent } from "styled-components";
import Modal from "../../../../components/modal";
import { FiXCircle } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPasswordDuotone } from "react-icons/pi";
import { Select } from "../../styles/styles";
import { TUser } from "../types/types";
import { API } from "../../../../services/API";
import { useForm } from "../../../../hooks/useForm";

type Props = {
  modal: boolean;
  toogleUser: () => void;
  getAllUsers: () => Promise<void>;
};

const CreateUser = ({ modal, toogleUser, getAllUsers }: Props): JSX.Element => {
  // const { register, handleSubmit, reset } = useForm<TUser>();
  const { form, changeForm, clearInputs } = useForm<TUser>({
    user_name: "",
    user_email: "",
    user_level: 2,
    user_password: "",
  });

  const createUser = async (e: InputEvent): Promise<void> => {
    e.preventDefault();
    await API.post("/users", {
      user_name: form.user_name,
      user_email: form.user_email,
      user_password: form.user_password,
      user_level: form.user_level
    })
      .then(() => {
        toogleUser();
        getAllUsers();
        clearInputs();
        console.log(form);
      })
      .catch((er) => {
        console.log(er.response.data);
      });
  };
  return (
    <>
      <Modal state={modal}>
        <CreateUserContainer>
          <span>
            <FiXCircle onClick={toogleUser} className="icone" />
          </span>
          <SubTitle>Criar um novo usuario</SubTitle>
          <FormUser onSubmit={createUser}>
            <Label>
              {"Nome do usuario"}
              <Input
                type="text"
                placeholder="Digite o nome do usuario"
                name="user_name"
                value={form.user_name}
                onChange={changeForm}
              />
              <FaRegUser className="figure" />
            </Label>
            <Label>
              {"E-mail do usuario"}
              <Input
                type="text"
                placeholder="Digite o email do usuario"
                name="user_email"
                value={form.user_email}
                onChange={changeForm}
              />
              <MdOutlineMailOutline className="figure" />
            </Label>
            <Label>
              {"Senha temporaria"}
              <Input
                type="text"
                placeholder="Digite a senha temporaria do usuario"
                name="user_password"
                value={form.user_password}
                onChange={changeForm}
              />
              <PiPasswordDuotone className="figure" />
            </Label>
            <Label>
              {"Tipo de usuario"}
              <div className="opt">
                <Select
                  name="user_level"
                  value={form.user_level}
                  onChange={changeForm}
                >
                  <option value={1}>Admin</option>
                  <option value={2}> operador</option>
                </Select>
              </div>
            </Label>
            <BtnCriar type="submit">{"Criar usuario"}</BtnCriar>
          </FormUser>
        </CreateUserContainer>
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

const FormUser: IStyledComponent<"web", FastOmit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, never>> = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CreateUserContainer = styled.div`
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

export default CreateUser;
