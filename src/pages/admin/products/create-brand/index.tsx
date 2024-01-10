import Modal from "../../../../components/modal";
import { FiXCircle } from "react-icons/fi";
import { BiSolidRename } from "react-icons/bi";
import { Props, TBrands } from "../types/types";
import {
  BoxEdit,
  BtnAction,
  Input,
  Label,
  SubTitle,
  Form,
  ErrorText,
  SuccessText,
} from "../../styles/styles";
import { FormEvent, useState } from "react";
import { API } from "../../../../services/API";

type States = {
  error: boolean;
  mensagem: string | undefined;
  brands: Array<TBrands>;
  errorMessage: string;
  successMessage: string;
};

const CreateBrand = ({ state, toogle }: Props): JSX.Element => {
  const [configs, setConfigs] = useState<States>({
    error: false,
    mensagem: undefined,
    brands: [],
    errorMessage: "",
    successMessage: ""
  });

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await getData();
    if(configs.mensagem !== ""){
      await API.post("/brands", {brand_name: configs.mensagem}).then((message) => {
        console.log(message)
        setConfigs({...configs, error: false, mensagem: "", successMessage: "Marca adicionada com sucesso!"});
      })
      .catch((err) => {
        setConfigs({...configs, errorMessage: err.message, error: true});
      })

      setTimeout(()=>{
        setConfigs({...configs, successMessage: "", mensagem: ""});
      }, 1000);
    }else{
      setConfigs({...configs, errorMessage: "Nao pode ir em branco", error: true});
      setTimeout(()=>{
        setConfigs({...configs, successMessage: "", mensagem: ""});
      }, 2000);
    }
  }

  const getData = async () => {
    await API.get("/brands").then((brands) => {
      setConfigs({...configs, brands: brands.data});
    })
    .catch((err) => {
      setConfigs({...configs, errorMessage: err});
    })
  }
  return (
    <>
      <Modal state={state}>
        <BoxEdit>
          <SubTitle>Criar uma Marca</SubTitle>
          <span>
            <FiXCircle onClick={toogle} className="icone" />
          </span>
          <Form onSubmit={HandleSubmit}>
            <Label>
              {"Nome da Marca"}
              <Input value={configs.mensagem} onChange={(e) => setConfigs({...configs, mensagem: e.target.value})} type="text" placeholder="Digite o nome da Marca" />
              <BiSolidRename className="figure" />
            </Label>
            {configs.error && <ErrorText>{configs.errorMessage}</ErrorText>}
            {configs.successMessage !== "" && (<SuccessText>{configs.successMessage}</SuccessText>)}
            <BtnAction>Criar</BtnAction>
          </Form>
        </BoxEdit>
      </Modal>
    </>
  );
};

export default CreateBrand;
