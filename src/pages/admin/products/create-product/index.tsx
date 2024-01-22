import { FiXCircle } from "react-icons/fi";
import Modal from "../../../../components/modal";
import { BiSolidRename } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { PiGarage } from "react-icons/pi";
import { MdDescription } from "react-icons/md";
import { useForm } from "react-hook-form";
import { ListData, Props, TProducts } from "../types/types";
import { API } from "../../../../services/API";
import { useEffect, useState } from "react";
import {
  BoxEdit,
  BtnAction,
  Form,
  Input,
  Label,
  Select,
  SubTitle,
  TextArea,
} from "../../styles/styles";

const CreateProduct = ({ state, toogle, getProduct }: Props): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<TProducts>();
  const [dados, setDados] = useState<ListData>({
    category: [],
    brands: [],
  });

  async function getStates() {
    const categoria = await API.get("/categories");
    const brands = await API.get("/brands");
    setDados({ ...dados, category: categoria.data, brands: brands.data });
  }

  useEffect(() => {
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const criarProduto = async (data: TProducts | undefined): Promise<void> => {
    await API.post("/products", data)
      .then(() => {
        reset();
        if (getProduct !== undefined) {
          getProduct();
        }
        toogle();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  
  return (
    <>
      <Modal state={state}>
        <BoxEdit>
          <SubTitle>Criar um novo Produto</SubTitle>
          <span>
            <FiXCircle onClick={toogle} className="icone" />
          </span>
          <Form onSubmit={handleSubmit(criarProduto)}>
            <Label>
              {"Nome do produto"}
              <Input
                type="text"
                placeholder="Digite o nome do produto"
                {...register("name")}
              />
              <BiSolidRename className="figure" />
            </Label>
            <Select {...register("category")}>
              <option>Selecione a categoria</option>
              {dados.category &&
                dados.category.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.name}
                  </option>
                ))}
            </Select>

            <Select {...register("brand")}>
              <option>Selecione a marca</option>
              {dados.brands &&
                dados.brands.map((marca) => (
                  <option key={marca.id} value={marca.id}>
                    {marca.brand_name}
                  </option>
                ))}
            </Select>
            <Select {...register("condition")}>
              <option>Selecione a condição:</option>
              <option value={1}>Novo</option>
              <option value={2}>Usado</option>
            </Select>

            <Select {...register("sizes")}>
              <option>Selecione o tamanho</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option>
              <option value={41}>41</option>
              <option value={42}>42</option>
              <option value={43}>43</option>
            </Select>

            <Label>
              {"Preço do produto"}
              <Input
                type="text"
                // pattern="[0-9]*"
                placeholder="Digite o preço do produto"
                {...register("price")}
              />
              <BsCoin className="figure" />
            </Label>
            <Label>
              {"deseja dar desconto no produto?"}
              <Input
                type="number"
                placeholder="Digite o valor do desconto"
                {...register("discount")}
              />
              <BsCoin className="figure" />
            </Label>
            <Label>
              {"imagem do produto"}
              <Input
                type="text"
                placeholder="Digite o link da imagem do produto"
                {...register("image")}
              />
              <FaImage className="figure" />
            </Label>
            <Select {...register("status")}>
              <option>Selecione o status</option>
              <option value={1}>Ativo</option>
              <option value={2}>Inativo</option>
            </Select>
            <Select {...register("gender")}>
              <option>Selecione o gênero</option>
              <option value="masculino">masculino</option>
              <option value="feminino">feminino</option>
              <option value="unisex">unisex</option>
            </Select>
            <Label>
              {"Cor do produto"}
              <Input
                type="text"
                placeholder="Informe a cor do produto"
                {...register("colors")}
              />
              <IoIosColorPalette className="figure" />
            </Label>

            <Label>
              {"Estoque do produto"}
              <Input
                type="number"
                placeholder="Informe a Quantidade de produtos"
                {...register("stock")}
              />
              <PiGarage className="figure" />
            </Label>

            <Label>
              {"Informe a descrição do produto"}
              <TextArea
                type="text"
                placeholder="Digite a descrição do produto"
                {...register("description")}
              />
              <MdDescription className="figure" />
            </Label>

            <BtnAction>Cadastrar produto</BtnAction>
          </Form>
        </BoxEdit>
      </Modal>
    </>
  );
};

export default CreateProduct;
