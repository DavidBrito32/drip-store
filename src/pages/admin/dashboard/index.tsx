import styled from "styled-components";

import { FaUsers } from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";
import { GiTatteredBanner } from "react-icons/gi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

const DashboardPage = (): JSX.Element => {
  return (
    <>
      <ContainerDashboard>
        <NavBar>
          <Logo>
            <LogoSvg>
              <span />
            </LogoSvg>
            <Title>Digital Store</Title>
          </Logo>

          <ListMenu>
            <ListItem>
              {" "}
              <FaUsers className="icon" /> Usuarios
            </ListItem>
            <ListItem>
              {" "}
              <LuBaggageClaim className="icon" /> Produtos
            </ListItem>
            <ListItem>
              {" "}
              <GiTatteredBanner className="icon" /> Banners
            </ListItem>
            <ListItem>
              {" "}
              <MdOutlineCollectionsBookmark className="icon" /> Coleções
            </ListItem>
          </ListMenu>
        </NavBar>
      </ContainerDashboard>
    </>
  );
};

const ContainerDashboard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: var(--Secundary_G);
`;

const NavBar = styled.div`
  width: 300px;
  height: 100%;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;

const LogoSvg = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--Primary);
  border-radius: 6px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 4px;
    top: 38%;
    left: 15%;
    transform: translateY(-35%) rotate(45deg);
    background-color: white;
  }
  &::before {
    content: "";
    position: absolute;
    width: 40%;
    height: 4px;
    bottom: 30%;
    left: 15%;
    transform: translateY(-30%) rotate(-45deg);
    background-color: white;
  }

  & span {
    position: absolute;
    width: 10px;
    height: 4px;
    background-color: white;
    bottom: 6px;
    right: 5px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: var(--Dark_Gray_2);
`;

const ListMenu = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 100px;
`;

const ListItem = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  text-transform: uppercase;
  gap: 20px;
  padding: 10px 0 10px 10px;
  color: var(--Dark_Gray_2);
  transition-duration: 0.2s;
  cursor: pointer;
  & .icon {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: var(--Tertiary);
    color: var(--White);
  }
`;

export default DashboardPage;
