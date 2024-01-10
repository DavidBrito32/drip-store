import { FaPlus, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { SiMedibangpaint } from "react-icons/si";
import { useEffect, useState } from "react";
import CreateProduct from "./create-product";
import EditProduct from "./edit-product";
import CreateCategory from "./create-category";
import CreateBrand from "./create-brand";
import { FlagsPage, TRenderProduct } from "./types/types";
import { API } from "../../../services/API";
import { ActionProduct, Box, Btn, BtnsContainer, Container, SubTitle, Table, Title } from "../styles/styles";

const ProductsDashboard = (): JSX.Element => {
  const [flags, setFlags] = useState<FlagsPage>({
    createBrand: false,
    createCategory: false,
    createProduct: false,
    editProduct: false,
  });

  const [products, setProducts] = useState<Array<TRenderProduct>>([]);
  const getProducts = async () => {
    await API.get("/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);


  const toogleProduct = () =>
    setFlags({ ...flags, createProduct: !flags.createProduct });
  const toogleEditProduct = () =>
    setFlags({ ...flags, editProduct: !flags.editProduct });
  const toogleCategory = () =>
    setFlags({ ...flags, createCategory: !flags.createCategory });
  const toogleBrand = () =>
    setFlags({ ...flags, createBrand: !flags.createBrand });

  return (
    <>
      <Container>
        <Title>Gerenciamento de produtos</Title>
        <SubTitle>
          Bem vindo <span>Usuario</span>
        </SubTitle>
        <ActionProduct>
          <SubTitle>Lista de produtos</SubTitle>
          <BtnsContainer>
            <Btn onClick={toogleProduct}>
              <FaPlus className="icone" />
              Novo Produto
            </Btn>
            <Btn onClick={toogleCategory} className="category">
              <TbCategoryPlus className="icone" />
              Nova Categoria
            </Btn>
            <Btn onClick={toogleBrand} className="brand">
              <SiMedibangpaint className="icone brand" />
              Nova Marca
            </Btn>
          </BtnsContainer>
        </ActionProduct>

        <Table>
          <thead>
            <tr className="cabecalho">
              <th>Nome do Produto</th>
              <th>Marca do Produto</th>
              <th>Categoria do Produto</th>
              <th>Preço do Produto</th>
              <th>Desconto</th>
              <th>Açoes</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.product_id}>
                <td>{item.product_name}</td>
                <td>{item.brand_name}</td>
                <td>{item.category_name}</td>
                <td>
                  R$: <span>{item.product_price}</span>
                </td>
                <td>{item.product_discount}</td>
                <td>
                  <Box>
                    <Btn onClick={toogleEditProduct}>
                      <FaPencilAlt className={"icone"} />
                    </Btn>
                    <Btn>
                      <FaRegTrashAlt className={"icone"} />
                    </Btn>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <CreateProduct state={flags.createProduct} toogle={toogleProduct} getProduct={getProducts} />
        <EditProduct
          state={flags.editProduct}
          toogle={toogleEditProduct}
          id={2}
        />
        <CreateCategory state={flags.createCategory} toogle={toogleCategory} />
        <CreateBrand state={flags.createBrand} toogle={toogleBrand} />
      </Container>
    </>
  );
};

export default ProductsDashboard;
