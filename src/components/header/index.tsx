import { Link, NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { useContext, useState } from "react";
import CartItems from "./cart-items/assets";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

interface Flags {
  burger: boolean;
  input: boolean;
  cart: boolean;
}

const Header = (): JSX.Element => {
  // @ts-expect-error not possible validation type of context
  const { userCredencial: User, setUserCredencial } = useContext(AuthContext);
  const navigate: NavigateFunction = useNavigate(); 

  const [flags, setFlags] = useState<Flags>({
    burger: false,
    input: false,
    cart: false,
  });



  const mudaBurger = () =>
    setFlags({ ...flags, burger: !flags.burger, input: false, cart: false });
  const mudaInput = () =>
    setFlags({ ...flags, input: !flags.input, burger: false, cart: false });
  const mudaCart = () =>
    setFlags({ ...flags, cart: !flags.cart, burger: false, input: false });

    const deslogged = () => {
      localStorage.removeItem("user");
      setUserCredencial(null);
      navigate("/")
    }

  return (
    <>
      <HeaderContainer>
        <div
          onClick={mudaBurger}
          className={flags.burger ? "burger active" : "burger"}
        >
          <span />
          <span />
          <span />
        </div>

        <div className="Logo">
          <div className="icone">
            <span />
          </div>
          <h1>Digital Store</h1>
        </div>

        <div className={flags.input ? "input open" : "input"}>
          <input type="text" placeholder="Pesquisar produto..." />
          <IoIosSearch onClick={mudaInput} className="search" />
        </div>

        <div
          className={flags.burger ? "action-button active" : "action-button"}
        >          
          {
            User ? (
              <div className="logado">
                <FaUser className={"icone"} />
                <h4 title={User.user_name}>{User.user_name}</h4>
                <h5 className="click" onClick={deslogged}>Sair</h5>
              </div>
            ): (
              <>
              <Link to={"/auth/logout"}>Cadastre-se</Link>
              <button onClick={() => navigate("/auth/login")}>Entrar</button>               
              </>
            )
          }
        </div>

        <div className="cart">
          <FiShoppingCart onClick={mudaCart} className={"cart-icon"} />
          <span>1</span>

          <div className={flags.cart ? "cart-items active" : "cart-items"}>
            <h3>Meu Carrinho</h3>
            <ul>
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
            </ul>
            <h3>
              Valor total: <span>R$ 219,00</span>
            </h3>
            <div className="btns">
              <p>Esvaziar</p>
              <button onClick={() => navigate("/my-order")} >Ver Carrinho</button>
            </div>
          </div>
        </div>

        <nav className={flags.burger ? "active" : ""}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Produtos</NavLink>
            </li>
            <li>
              <NavLink to={"/my-order"}>Meus Produtos</NavLink>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px 0;
  padding: 35px 102px;
  position: relative;

  & .burger {
    width: 30px;
    height: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 0.2s;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    & span {
      width: 100%;
      height: 4px;
      background-color: var(--Dark_Gray);
      transition-duration: 0.2s;
    }

    &.active {
      & span {
        position: absolute;
        &:first-child {
          display: none;
        }
        &:nth-child(2) {
          top: 45%;
          left: 0%;
          transform: translateY(-45%);
          rotate: 45deg;
        }
        &:last-child {
          top: 45%;
          left: 5%;
          transform: translateY(-45%);
          rotate: -45deg;
        }
      }
    }
  }

  & .Logo {
    display: flex;
    gap: 5px;
    align-items: center;
    & h1 {
      font-size: 2.1rem;
      line-height: 45px;
      font-weight: 600;
      color: var(--Primary);
    }
    & .icone {
      width: 33px;
      height: 33px;
      border-radius: 8px;
      background-color: var(--Primary);
      position: relative;

      & span {
        width: 35%;
        height: 4px;
        background-color: white;
        position: absolute;
        bottom: 20%;
        right: 15%;
      }

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
    }
  }

  & .input {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 48px 0 27px;
    position: relative;
    border: none;

    & input {
      width: 100%;
      height: 60px;
      border-radius: 8px;
      border: 2px solid transparent;
      background: var(--Light_Gray_3);
      padding-left: 20px;
      transition-duration: 0.2s;

      &:hover,
      &:focus,
      &:active {
        border: 2px solid var(--Primary);
        & + .search {
          color: var(--Primary);
        }
      }
    }

    & .search {
      width: 24px;
      height: 24px;
      color: var(--Dark_Gray_2);
      position: absolute;
      opacity: 0.7;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition-duration: 0.2s;

      &:hover {
        scale: 1.1;
        color: var(--Primary);
      }
      &:active {
        scale: 0.9;
        color: var(--Primary);
      }
    }
  }

  & .action-button {
    display: flex;
    gap: 0 30px;
    align-items: center;
    margin-right: 30px;
    transition-duration: 0.4s;
    & a {
      font-size: 1rem;
      color: var(--Dark_Gray_2);
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    & button {
      width: 114px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      border: none;
      background-color: var(--Primary);
      font-weight: 700;
      line-height: 22px;
      color: var(--White);
      font-size: 0.9rem;
      cursor: pointer;
      transition-duration: 0.2s;

      &:hover {
        opacity: 0.6;
      }
      &:active {
        scale: 0.9;
      }
    }

    & .logado{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
        & .icone{
          width: 25px;
          height: 25px;
          color: var(--Primary);
        }

        & h4{
          overflow: hidden;
          max-width: 100px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        & .click{
          font-size: 12px;
          color: var(--Light_Gray);
          cursor: pointer;
        }
    }
  }

  & .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & .cart-icon {
      width: 33px;
      height: 33px;
      color: var(--Primary);
      cursor: pointer;
      transition-duration: 0.2s;
      &:hover {
        scale: 1.1;
        & + span {
          scale: 1.1;
        }
      }
      &:active {
        scale: 0.9;
        & + span {
          scale: 0.9;
        }
      }
    }

    & span {
      position: absolute;
      line-height: 16px;
      min-width: 16px;
      top: -4px;
      left: 22px;
      font-weight: bold;
      border-radius: 50%;
      background-color: var(--Primary);
      padding: 0 4px;
      font-size: 10px;
      border-radius: 10px;
      text-align: center;
      color: white;
      transition-duration: 0.2s;
    }

    & .cart-items {
      width: 320px;
      height: 0;
      position: absolute;
      top: 60px;
      right: 0;
      background-color: black;
      border-radius: 4px;
      background: #fff;
      box-shadow: var(--Slaved);
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      visibility: hidden;
      opacity: 0;
      transition-duration: 0.4s;
      overflow: hidden;
      z-index: 2;

      &.active {
        visibility: visible;
        opacity: 1;
        height: 450px;
      }

      & h3 {
        color: var(--Dark_Gray_2);
        display: flex;
        justify-content: space-between;
        align-items: center;

        & span {
          position: static;
          background-color: transparent;
          font-size: 16px;
          font-weight: 700;
          color: var(--Primary);
        }
      }

      & ul {
        width: 100%;
        height: 246px;
        padding: 20px 0;
        overflow-y: auto;
        border-top: 2px solid var(--Dark_Gray_2);
        border-bottom: 2px solid var(--Dark_Gray_2);
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      & .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & p {
          display: inline;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }

        & button {
          width: 125px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--Primary);
          border-radius: 8px;
          border: none;
          outline: none;
          color: white;
          font-weight: bolder;
        }
      }
    }
  }

  & nav {
    width: 100%;
    transition-duration: 0.4s;

    & ul {
      display: flex;
      align-items: center;
      gap: 0 32px;
      & a {
        font-size: 1rem;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.75px;
        transition-duration: 0.2s;
        color: var(--Dark_Gray_2);
        text-decoration: underline;
        text-decoration-color: transparent;
        text-underline-offset: 5px;

        &.active {
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: var(--Primary);
          text-underline-offset: 5px;
          color: var(--Primary);
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 20px 20px;
    justify-content: space-between;
    position: relative;
    & .burger {
      position: relative;
      visibility: visible;
      opacity: 1;
    }

    & .Logo {
      & h1 {
        font-size: 18px;
      }

      & .icone {
        width: 22px;
        height: 22px;
        border-radius: 4px;
        background-color: var(--Primary);
        position: relative;

        & span {
          width: 35%;
          height: 3px;
          background-color: white;
          position: absolute;
          bottom: 20%;
          right: 15%;
        }

        &::after {
          content: "";
          position: absolute;
          width: 40%;
          height: 3px;
          top: 38%;
          left: 15%;
          transform: translateY(-35%) rotate(45deg);
          background-color: white;
        }
        &::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 3px;
          bottom: 30%;
          left: 15%;
          transform: translateY(-30%) rotate(-45deg);
          background-color: white;
        }
      }
    }

    & .input {
      flex: none;
      margin: 0;
      position: static;
      & input {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 80%;
        visibility: hidden;
        opacity: 0;
        width: 95%;
      }

      &.open {
        & input {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 80%;
          visibility: visible;
          opacity: 1;
          z-index: 10000;
          box-shadow: var(--Slaved);
        }
      }

      & .search {
        right: 50px;
      }
    }

    & .action-button {
      position: absolute;
      bottom: -650%;
      z-index: 101;
      width: 0%;
      visibility: hidden;
      opacity: 0;
      margin: 0;
      gap: 10px;
      flex-direction: column-reverse;
      & button {
        width: 100%;
        margin-top: 20px;
      }

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        top: 100%;
        background-color: var(--Light_Gray_2);
      }

      &.active {
        width: 80%;
        visibility: visible;
        opacity: 1;
      }
    }

    & .cart {
      position: absolute;
      top: 33%;
      right: 20px;
      width: 25px;
      height: 25px;

      & .cart-items {
        right: 50%;
      }
    }

    & nav {
      width: 0%;
      height: calc(100vh - 9vh);
      position: absolute;
      top: 100%;
      left: 0;
      padding-left: 30px;
      background-color: white;
      visibility: hidden;
      opacity: 0;
      z-index: 10;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #00000056;
        position: absolute;
        top: 0;
        left: 100%;
        z-index: -1;
        transition-duration: 0.4s;
      }

      & ul {
        margin-top: 50px;
        width: 0%;
        gap: 10px;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
      }

      &.active {
        width: 90%;
        visibility: visible;
        opacity: 1;
        & ul {
          width: 80%;
        }

        &::after {
          content: "Paginas";
          position: absolute;
          top: 0px;
          font-weight: 700;
          transition-duration: 0.4s;
        }
      }
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 20px 20px;
    justify-content: space-between;
    position: relative;
    & .burger {
      position: relative;
      visibility: visible;
      opacity: 1;
    }

    & .Logo {
      & h1 {
        font-size: 18px;
      }

      & .icone {
        width: 22px;
        height: 22px;
        border-radius: 4px;
        background-color: var(--Primary);
        position: relative;

        & span {
          width: 35%;
          height: 3px;
          background-color: white;
          position: absolute;
          bottom: 20%;
          right: 15%;
        }

        &::after {
          content: "";
          position: absolute;
          width: 40%;
          height: 3px;
          top: 38%;
          left: 15%;
          transform: translateY(-35%) rotate(45deg);
          background-color: white;
        }
        &::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 3px;
          bottom: 30%;
          left: 15%;
          transform: translateY(-30%) rotate(-45deg);
          background-color: white;
        }
      }
    }

    & .input {
      flex: none;
      margin: 0;
      position: static;
      & input {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 80%;
        visibility: hidden;
        opacity: 0;
        width: 95%;
      }

      &.open {
        & input {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 80%;
          visibility: visible;
          opacity: 1;
        }
      }

      & .search {
        right: 50px;
      }
    }

    & .action-button {
      position: absolute;
      bottom: -550%;
      z-index: 101;
      width: 0%;
      visibility: hidden;
      opacity: 0;
      margin: 0;
      gap: 10px;
      flex-direction: column-reverse;
      & button {
        width: 100%;
        margin-top: 20px;
      }

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        top: 100%;
        background-color: var(--Light_Gray_2);
      }

      &.active {
        width: 45%;
        visibility: visible;
        opacity: 1;
      }
    }

    & .cart {
      position: absolute;
      top: 33%;
      right: 20px;
      width: 25px;
      height: 25px;
    }

    & nav {
      width: 0%;
      height: calc(100vh - 9vh);
      position: absolute;
      top: 100%;
      left: 0;
      padding-left: 30px;
      background-color: white;
      visibility: hidden;
      opacity: 0;
      z-index: 100;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #00000056;
        position: absolute;
        top: 0;
        left: 100%;
        z-index: -1;
        transition-duration: 0.4s;
      }

      & ul {
        margin-top: 50px;
        width: 0%;
        gap: 10px;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
      }

      &.active {
        width: 50%;
        visibility: visible;
        opacity: 1;
        & ul {
          width: 80%;
        }

        &::after {
          content: "Paginas";
          position: absolute;
          top: 0px;
          font-weight: 700;
          transition-duration: 0.4s;
        }
      }
    }
  }
`;

export default Header;
