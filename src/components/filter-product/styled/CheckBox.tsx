import { useState } from "react";
import styled from "styled-components";

interface StyledProps {
  type?: string;
  src?: string;
  alt?: string;
  style?: string;
  className?: string;
  name?: string;
  value?: string | number | boolean | undefined;
}

type Props = {
    name: string,
    defaultValue: boolean,
    alteraInput: () => void;
}

const CheckBox = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const mudaStatus = () => setActive(!active);

  return (
    <>
      <BoxInput onClick={mudaStatus} className={active ? "active" : ""}>
        <Checked className={active ? "active" : ""} />
        <Check name={props.name} value={props.defaultValue} onChange={props.alteraInput} type="checkbox" />
      </BoxInput>
    </>
  );
};

const BoxInput = styled.div<StyledProps>`
  width: 22px;
  height: 22px;
  overflow: hidden;
  border-radius: 2px;
  position: relative;
  transition-duration: 0.2s;
  border: 1px solid var(--Light_Gray_2);
  &.active {
    background-color: var(--Primary);
  }
`;

const Check = styled.input<StyledProps>`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background-color: transparent;
  opacity: 0;
`;

const Checked = styled.div<StyledProps>`
  width: 0%;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-top: 4px solid var(--White);
  border-right: 4px solid var(--White);
  top: 40%;
  left: 40%;
  z-index: 1;
  /* transform: translate(-40%, -40%) rotate(135deg); */
  z-index: 0;
  transition-duration: 0.3s;
  cursor: pointer;
  scale: 0;

  &.active {
    width: 80%;
    height: 8px;
    transform: translate(-40%, -40%) rotate(135deg);
    scale: 1;

  }
`;

export default CheckBox;
