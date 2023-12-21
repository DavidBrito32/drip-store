import { Outlet } from "react-router-dom";
import HeaderAuth from "../../components/headerAuth";
import Footer from "../../components/footer";
import styled from "styled-components";

const AuthLayout = (): JSX.Element => {
  return (
    <>
      <HeaderAuth />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
      <Footer />
    </>
  );
};

const ContainerLayout = styled.div`
  min-height: 100vh;
  background: var(--Secundary_Gradient);
  overflow-x: hidden;
`;

export default AuthLayout;
