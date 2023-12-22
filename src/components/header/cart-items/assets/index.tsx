import styled from "styled-components";
import Tenis from "./Tenis.svg";

const CartItems = (): JSX.Element => {
  return (
    <>
      <CartContainerItems>
        <div className="imagem">
          <img src={Tenis} alt="sapato" />
        </div>
        <div className="infos">
          <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
          <h4>
            R$ 219,00 <span>R$ 219,00</span>
          </h4>
        </div>
      </CartContainerItems>
    </>
  );
};

const CartContainerItems = styled.li`
  display: flex;
  gap: 20px;

  & .imagem {
    width: 75px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & .infos {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & h3 {
      font-size: 16px;
      color: var(--Dark_Gray_2);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & h4 {
      display: flex;
      font-size: 16px;
      color: var(--Dark_Gray_2);
      gap: 3px;
      & span {
        position: static;
        background-color: transparent;
        font-size: 14px;
        color: var(--Light_Gray_2);
      }
    }
  }
`;

export default CartItems;
