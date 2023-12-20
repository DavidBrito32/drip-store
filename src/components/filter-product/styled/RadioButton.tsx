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

const RadioButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const mudaStatus = () => setActive(!active);

  return (
    <>
      <BoxInput onClick={mudaStatus} className={active ? "active" : ""}>
        <Checked className={active ? "active" : ""} />
        <RadioInput name={props.name} value={props.defaultValue} onChange={props.alteraInput} type="radio" />
      </BoxInput>
    </>
  );
};

const BoxInput = styled.div<StyledProps>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.2s;
  border: 1px solid var(--Light_Gray_2);
  position: relative;
`;

const RadioInput = styled.input<StyledProps>`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: transparent;
  opacity: 0;
`;

const Checked = styled.div<StyledProps>`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  transition-duration: 0.3s;
  cursor: pointer;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.active {
    width: 14px;
    height: 14px;
    background-color: var(--Primary);
  }
`;

export default RadioButton;
