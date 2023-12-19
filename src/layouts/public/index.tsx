import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";

const PublicLayout = (): JSX.Element => {
  return (
    <>
      <Header />
        <ContainerLayout>
            <Outlet />
        </ContainerLayout>
      <Footer />
    </>
  );
};

const ContainerLayout = styled.div`
  min-height: 100vh;
`;

export default PublicLayout;
