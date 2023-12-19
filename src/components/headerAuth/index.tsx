import styled, { IStyledComponent } from "styled-components";

const HeaderAuth = (): JSX.Element => {
  return (
    <>
      <ContainerHeader>
        <div className="Logo">
          <div className="icone">
            <span />
          </div>
          <h1>Digital Store</h1>
        </div>
      </ContainerHeader>
    </>
  );
};

const ContainerHeader: IStyledComponent<"web"> = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 28px 100px;
  background-color: var(--White);
  transition-duration: .3s;

  & .Logo {
    display: flex;
    gap: 5px;
    align-items: center;
    position: relative;
    transition-duration: .3s;
    & h1 {
      font-size: 2.1rem;
      line-height: 45px;
      font-weight: 600;
      color: var(--Primary);
      transition-duration: .3s;
    }
    & .icone {
      width: 33px;
      height: 33px;
      border-radius: 8px;
      background-color: var(--Primary);
      position: relative;
      transition-duration: .3s;

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

  @media only screen and (max-width: 480px){
    justify-content: center;
    padding: 20px 100px;
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
  }
  @media only screen and (min-width: 480px) and (max-width: 768px){
    justify-content: center;
    padding: 20px 100px;
    & .Logo {
      & h1 {
        font-size: 32px;
      }

      & .icone {
        width: 33px;
        height: 33px;
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
  }
`;

export default HeaderAuth;
