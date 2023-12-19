import styled, { IStyledComponent } from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <>
      <ContainerFooter>
        <div className="logo">
          <div className="Logo">
            <div className="icone">
              <span />
            </div>
            <h1>Digital Store</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social_media">
            <FaFacebookF className={"icon"} />
            <FaInstagram className={"icon"} />
            <FaXTwitter className={"icon"} />
          </div>
        </div>

        <div className="coluna">
          <h3>Informação</h3>
          <ul>
            <li>
              <Link to={"#"}>Sobre Drip Store</Link>
            </li>
            <li>
              <Link to={"#"}>Segurança</Link>
            </li>
            <li>
              <Link to={"#"}>Wishlist</Link>
            </li>
            <li>
              <Link to={"#"}>Blog</Link>
            </li>
            <li>
              <Link to={"#"}>Trabalhe conosco</Link>
            </li>
            <li>
              <Link to={"/my-order"}>Meus Pedidos</Link>
            </li>
          </ul>
        </div>
        <div className="coluna">
          <h3>Categorias</h3>
          <ul>
            <li>
              <Link to={"#"}>Camisetas</Link>
            </li>
            <li>
              <Link to={"#"}>Calças</Link>
            </li>
            <li>
              <Link to={"#"}>Bonés</Link>
            </li>
            <li>
              <Link to={"#"}>Headphones</Link>
            </li>
            <li>
              <Link to={"#"}>Tênis</Link>
            </li>
          </ul>
        </div>

        <div className="contato">
          <h3>Contato</h3>
          <Link to={"#"}>
            <address>
              Av. Santos Dumont, 1510 - 1° Andar - Aldeota, Fortaleza-Ceará,
              60.150-161
            </address>
          </Link>
          <Link to={"tel:8530513411"}>(85) 3051-3411</Link>
        </div>

        <div className="hr"></div>
        <h3>@ 2024 Digital College</h3>
      </ContainerFooter>
    </>
  );
};

const ContainerFooter: IStyledComponent<"web"> = styled.footer`
  width: 100%;
  background-color: var(--Dark_Gray);
  display: flex;
  flex-wrap: wrap;
  padding: 70px 100px 20px;
  gap: 34px;
  justify-content: space-between;

  & .logo {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    & .Logo {
      display: flex;
      gap: 5px;
      align-items: center;
      & h1 {
        font-size: 2.1rem;
        line-height: 45px;
        font-weight: 600;
        color: var(--White);
      }
      & .icone {
        width: 33px;
        height: 33px;
        border-radius: 8px;
        background-color: var(--White);
        position: relative;

        & span {
          width: 35%;
          height: 4px;
          background-color: var(--Dark_Gray);
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
          background-color: var(--Dark_Gray);
        }
        &::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 4px;
          bottom: 30%;
          left: 15%;
          transform: translateY(-30%) rotate(-45deg);
          background-color: var(--Dark_Gray);
        }
      }
    }
    & p {
      color: var(--White);
    }

    & .social_media {
      display: flex;
      gap: 33px;
      & .icon {
        width: 20px;
        height: 20px;
        color: var(--White);
        cursor: pointer;
        transition-duration: 0.3s;
        &:hover {
          scale: 1.1;
          color: var(--Primary);
        }
      }
    }
  }

  & .coluna {
    display: flex;
    flex-direction: column;
    gap: 30px;
    & h3 {
      text-align: left;
      width: 100%;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
    }

    & ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      & a {
        font-size: 16px;
        line-height: 25px;
        color: var(--White);
        transition-duration: 0.3s;
        &:hover {
          color: var(--Primary);
        }
      }
    }
  }

  & .contato {
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    & a {
      color: var(--White);
      line-height: 25px;
      transition-duration: 0.3s;
      &:hover {
        color: var(--Primary);
        text-decoration: underline;
        text-underline-offset: 5px;
      }
    }
    & h3 {
      text-align: left;
      width: 100%;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
    }
    & address {
      color: var(--White);
      line-height: 25px;
      &:hover {
        text-decoration: underline;
        color: var(--Primary);
        cursor: pointer;
      }
    }
  }

  & .hr {
    width: 100%;
    height: 1px;
    background-color: var(--White);
  }

  & h3 {
    width: 100%;
    text-align: center;
    color: var(--White);
    font-weight: 400;
    font-size: 12px;
  }

  @media only screen and (max-width: 480px) {
    padding: 40px 20px 40px;

    & .logo {
      & .Logo {
        & .icone {
          width: 25px;
          height: 25px;
          border-radius: 4px;
        }
        & h1 {
          font-size: 24px;
        }
      }
      & p {
        font-size: 14px;
      }
    }
  }
`;

export default Footer;
