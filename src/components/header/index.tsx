import { Link, NavLink } from "react-router-dom";
import styled, { IStyledComponent } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <div className="Logo">
          <div className="icone">
            <span />
          </div>
          <h1>Digital Store</h1>
        </div>

        <div className="input">
          <input type="text" placeholder="Pesquisar produto..." />
        </div>

        <div className="action-button">
          <Link to={"/log-out"}>Cadastre-se</Link>
          <button>Entrar</button>
        </div>

        <div className="cart">
          <FiShoppingCart className={"cart-icon"} />
          <span />
        </div>

        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/products"}>Produtos</NavLink></li>
                <li><NavLink to={"/category"}>Categorias</NavLink></li>
                <li><NavLink to={"/my-order"}>Meus Produtos</NavLink></li>
            </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer: IStyledComponent<"web"> = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 0;
  padding: 35px 102px;

  & .Logo {
    display: flex;
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
    margin: 0 48px 0 27px;

    & input {
      width: 100%;
      height: 60px;
      border-radius: 8px;
      border: none;
      background: var(--Light_Gray_3);
      padding-left: 20px;
    }
  }

  & .action-button {
    display: flex;
    gap: 0 30px;
    align-items: center;
    margin-right: 30px;
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
    }
  }

  & nav{
    width: 100%;

        & ul{
            display: flex;
            align-items: center;
            gap: 0 32px;
                & a{
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 28px;
                    letter-spacing: .75px;
                    transition-duration: .2s;
                        &.active{
                            font-weight: 700;
                            line-height: 24px;
                            text-decoration: underline;
                            text-underline-offset: 5px;
                            color: var(--Primary)
                        }
                }
        }
  }
`;

export default Header;
