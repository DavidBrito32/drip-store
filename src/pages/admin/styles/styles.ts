import React from "react";
import styled, { IStyledComponent } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: var(--Dark_Gray_2);
`;

export const ActionProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.h3`
  font-size: 22px;
  color: var(--Dark_Gray_2);
  & span {
    font-style: italic;
    color: var(--Dark_Gray);
    font-weight: bolder;
  }
`;

export const ErrorText = styled.h3`
  width: 100%;
  padding: 10px;
  color: black;
  background-color: #F72B0255;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
`;
export const SuccessText = styled.h3`
  width: 100%;
  padding: 10px;
  color: black;
  background-color: #02F71255;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
`;

export const BoxEdit = styled.div`
  width: 500px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 40px 10px #00000088;
  display: flex;
  gap: 30px;
  position: relative;
  flex-direction: column;
  & span {
    position: absolute;
    right: 10px;
    top: 10px;
    & .icone {
      width: 30px;
      height: 30px;
      cursor: pointer;
      transition-duration: 0.2s;
      &:hover {
        color: var(--Primary);
        scale: 1.1;
      }
      &:active {
        scale: 0.97;
      }
    }
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px 10px;
  border-radius: 4px;
  color: var(--White);
  background-color: var(--Primary);
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition-duration: 0.2s;
  font-size: 16px;

  &.category {
    background-color: #335492;
  }

  &.brand {
    background-color: #ff0000;
  }

  &:hover {
    box-shadow: 1px 2px 5px 2px #00000065;
  }
  &:active {
    scale: 0.97;
  }

  & .icone {
    width: 18px;
    height: 18px;
    color: white;
  }
`;

export const BtnAction = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--White);
  background-color: var(--Primary);
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: 1px 2px 5px 2px #00000065;
  }
  &:active {
    scale: 0.97;
  }
`;

export const Table = styled.table`
  width: 100%;
  & tr {
    height: 50px;
    border-radius: 4px;
    text-align: center;

    &.cabecalho {
      background-color: #434356;
      color: white;
    }
    &:nth-child(even) {
      background-color: var(--Light_Gray_2);
    }

    & .botoes {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 50px;
    }

    & td {
      font-size: 16px;
      font-weight: bold;
      max-width: 250px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      & img{
        width: 150px;
        height: 150px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
      }

      &.userType {
        color: green;
      }
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Form: IStyledComponent<"web", FastOmit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, never>> = styled.form`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  color: var(--Light_Gray);
  position: relative;
  margin: 10px 0;

  & .figure {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 20px;
    bottom: 15px;
    transition-duration: 0.2s;
  }

  & .opt {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Input: IStyledComponent<"web", FastOmit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: var(--Light_Gray_2);
  padding-left: 20px;
  transition-duration: 0.2s;
  color: var(--Dark_Gray_2);
  font-size: 14px;
  font-weight: bold;
  &:focus {
    border-color: var(--Primary);
    & + .figure {
      color: var(--Primary);
    }
  }

  &::placeholder {
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: var(--Light_Gray_2);
  padding: 20px 20px 0;
  transition-duration: 0.2s;
  color: var(--Dark_Gray_2);
  font-size: 14px;
  font-weight: bold;
  &:focus {
    border-color: var(--Primary);
    & + .figure {
      color: var(--Primary);
    }
  }

  &::placeholder {
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const Select = styled.select`
  width: 45%;
  margin: 10px 0;
  height: 50px;
  border: 2px solid var(--Light_Gray_2);
  transition-duration: 0.3s;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  &:focus {
    border-color: var(--Primary);
  }
`;