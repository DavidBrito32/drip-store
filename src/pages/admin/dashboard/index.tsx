import styled from "styled-components";

import { FaUsers } from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";
import { GiTatteredBanner } from "react-icons/gi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

type State = {
  openModal: boolean;
};

const DashboardPage = (): JSX.Element => {
  const [flags, setFlags] = useState<State>({
    openModal: false,
  });

  const location = useLocation();

  const toogleModal = () => setFlags({ ...flags, openModal: !flags.openModal });
  return (
    <>
      <ContainerDashboard>
        <NavBar className={flags.openModal ? "active" : ""}>
          <h4 className="icone">
            {flags.openModal ? (
              <IoIosArrowDropleftCircle
                className="modal"
                onClick={toogleModal}
              />
            ) : (
              <IoIosArrowDroprightCircle
                className="modal"
                onClick={toogleModal}
              />
            )}
          </h4>
          <Logo>
            <LogoSvg>
              <span />
            </LogoSvg>
            <Title className={flags.openModal ? "" : "active"}>
              Digital Store
            </Title>
          </Logo>

          <ListMenu>
            <Link
              to={"/dashboard"}
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              {" "}
              <FaUsers className="icon" />{" "}
              <span className={flags.openModal ? "" : "active"}>Usuarios</span>
            </Link>
            <NavLink to={"/dashboard/products"}>
              {" "}
              <LuBaggageClaim className="icon" />{" "}
              <span className={flags.openModal ? "" : "active"}>Produtos</span>
            </NavLink>
            <NavLink to={"/dashboard/banners"}>
              {" "}
              <GiTatteredBanner className="icon" />{" "}
              <span className={flags.openModal ? "" : "active"}>Banners</span>
            </NavLink>
            <NavLink to={"/dashboard/collections"}>
              {" "}
              <MdOutlineCollectionsBookmark className="icon" />{" "}
              <span className={flags.openModal ? "" : "active"}>Coleções</span>
            </NavLink>
          </ListMenu>
        </NavBar>
        <Container>
          <Outlet />
        </Container>
      </ContainerDashboard>
    </>
  );
};

const ContainerDashboard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: var(--Secundary_G);
  gap: 50px;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.div`
  width: 100px;
  height: 100%;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  position: relative;
  transition-duration: 0.2s;

  & .icone {
    position: absolute;
    top: 1%;
    transform: translateY(-1%);
    right: -10px;
    color: var(--Primary);
    width: 35px;
    height: 35px;
    cursor: pointer;

    & .modal {
      width: 100%;
      height: 100%;
      transition-duration: 0.2s;
      &:hover {
        scale: 1.2;
      }
      &:active {
        scale: 0.97;
      }
    }
  }

  &.active {
    width: 300px;
  }
`;

const Logo = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  position: relative;
  margin-top: 50px;
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
  width: 200px;
  font-size: 32px;
  font-weight: bold;
  color: var(--Dark_Gray_2);
  text-overflow: ellipsis;
  white-space: nowrap;

  &.active {
    width: 0px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }
`;

const ListMenu = styled.ul`
  width: 100%;
  display: flex;
  overflow: hidden;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 0 20px;

  & a {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bolder;
    text-transform: uppercase;
    gap: 20px;
    padding: 10px 0 10px 15px;
    color: var(--Dark_Gray_2);
    transition-duration: 0.2s;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    & .icon {
      width: 30px;
      height: 30px;
    }

    & span {
      width: 150px;
      font-size: 20px;
      font-weight: bolder;
      text-transform: uppercase;
      &.active {
        width: 0px;
        position: absolute;
        visibility: hidden;
        opacity: 0;
      }
    }
    &.active {
      background-color: var(--Tertiary);
      color: var(--White);
      border-radius: 8px;
    }

    &:hover {
      background-color: var(--Tertiary);
      color: var(--White);
      border-radius: 8px;
    }
  }
`;

const Container = styled.div`
  flex: 1;
  background-color: white;
  height: 90%;
  border-radius: 8px;
`;

export default DashboardPage;
