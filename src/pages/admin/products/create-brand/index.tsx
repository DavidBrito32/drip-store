import Modal from "../../../../components/modal";
import { FiXCircle } from "react-icons/fi";
import { BiSolidRename } from "react-icons/bi";
import { BoxEdit, BtnAction, Form, Input, Label, SubTitle } from "../styles/styles";
import { Props } from "../types/types";

const CreateBrand = ({ state, toogle }: Props): JSX.Element => {
  return (
    <>
      <Modal state={state}>
        <BoxEdit>
          <SubTitle>Criar uma Marca</SubTitle>
          <span>
            <FiXCircle onClick={toogle} className="icone" />
          </span>
          <Form>
            <Label>
              {"Nome da Marca"}
              <Input type="text" placeholder="Digite o nome da Marca" />
              <BiSolidRename className="figure" />
            </Label>
            <BtnAction>Criar</BtnAction>
          </Form>
        </BoxEdit>
      </Modal>
    </>
  );
};

export default CreateBrand;
