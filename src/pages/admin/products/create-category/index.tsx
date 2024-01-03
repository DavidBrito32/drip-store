import styled from "styled-components";
import Modal from "../../../../components/modal";
import { FiXCircle } from "react-icons/fi";
import { BiSolidRename } from "react-icons/bi";
import { Props } from "../types/types";


type FormsTypes = {
    placeholder?: string;
    alt?: string;
    type?: string;
  };

const CreateCategory = ( {state, toogle}: Props): JSX.Element => {
  return (
    <>
      <Modal state={state}>
        <BoxEdit>
          <SubTitle>Criar uma categoria</SubTitle>
          <span>
            <FiXCircle onClick={toogle} className="icone" />
          </span>
          <Form>
            <Label>
              {"Nome da categoria"}
              <Input type="text" placeholder="Digite o nome da categoria" />
              <BiSolidRename className="figure" />
            </Label>
            <BtnAction>Criar</BtnAction>
          </Form>
        </BoxEdit>
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

const BoxEdit = styled.div`
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

const BtnAction = styled.button`
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

const Form = styled.form`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  width: 100%;
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
export default CreateCategory;
