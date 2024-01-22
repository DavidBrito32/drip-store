import styled from "styled-components";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import sapato1 from "./assets/sapato-frente.svg";
import sapato2 from "./assets/sapato-verso.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../services/API";
import { AuthContext } from "../../../contexts/AuthContext";

interface StyledProps {
  placeholder?: string;
  type?: string;
  src?: string;
  alt?: string;
  action?: () => void;
  onSubmit?: () => void;
}

type Flags = {
  password: boolean;
};

type TLogin = {
  email: string;
  password: string
}


const LoginPage = () => {
  const navigate = useNavigate();
  // @ts-expect-error not possible validation type of context
  const { setUserCredencial } = useContext(AuthContext);
  const [flags, setFlags] = useState<Flags>({
    password: false,
  });

  const { register, handleSubmit, reset  } = useForm<TLogin>();

  const Submit = async (data: TLogin) => {
      reset();
      requisicao(data);
  }

  const requisicao = async (data: TLogin) => {
    await API.post("/login", {email: data.email, password: data.password})
      .then((response) => {
        setUserCredencial(response.data[0]);
        localStorage.setItem("user", JSON.stringify(response.data[0]));

          if(response.data[0].user_level === 1){
            navigate("/dashboard")
          }else if(response.data[0].user_level === 2){
            navigate("/")
          }
      })
      .catch((err: Error) => console.log(err.message));
  }



  const tooglePassword = () =>
    setFlags({ ...flags, password: !flags.password });
  return (
    <>
      <ContainerLogin>
        <FormLogin>
          <Title>Acesse sua conta</Title>
          <Text>
            Novo cliente? Então registre-se{" "}
            <Link to={"/auth/logout"}>aqui.</Link>
          </Text>
          <ContainerInput>
            <Label>
              <TitleLabel>Login *</TitleLabel>
              <Input 
                type="email" 
                placeholder="Insira seu login ou email"
                {...register("email", {required: true})}
                />
            </Label>
            <Label>
              <TitleLabel>Senha *</TitleLabel>
              <Input
                type={flags.password ? "text" : "password"}
                placeholder="Insira sua senha"
                {...register("password")}
              />
              {flags.password ? (
                <FaEyeSlash onClick={tooglePassword} className={"icon"} />
              ) : (
                <FaEye onClick={tooglePassword} className={"icon"} />
              )}
            </Label>
          </ContainerInput>
          <ResetPassword>Esqueci minha senha</ResetPassword>
          <ButtonAction type="button" onClick={() => handleSubmit(Submit)()}>Acessar conta</ButtonAction>
          <LoginOptions>
            Ou faça login com <FcGoogle className="social" />{" "}
            <FaFacebook className="social face" />{" "}
          </LoginOptions>
        </FormLogin>

        <ContainerImage>
          <Image className="left" src={sapato1} />
          <Image className="right" src={sapato2} />
        </ContainerImage>
      </ContainerLogin>
    </>
  );
};

const ContainerLogin = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  height: 100dvh;
  justify-content: space-between;
  gap: 45px;
  align-items: center;
  padding: 0 100px;

  @media only screen and (max-width: 480px) {
    justify-content: center;
    padding: 0 10px;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 30px;
  }
`;

const FormLogin = styled.form`
  width: 585px;
  height: 560px;
  display: flex;
  flex-direction: column;
  background-color: var(--White);
  padding: 30px;
  border-radius: 4px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: fit-content;
  }
`;

const Title = styled.h3<StyledProps>`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: var(--Large-spaced);
  color: var(--Dark_Gray_2);
`;

const Text = styled.p<StyledProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
  margin-top: 20px;
`;

const ContainerInput = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
`;

const Label = styled.label<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  & .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: var(--Light_Gray);
    cursor: pointer;
  }
`;

const TitleLabel = styled.h3<StyledProps>`
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);
`;

const Input = styled.input<StyledProps>`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: var(--Light_Gray_3);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_3);
  padding-left: 20px;
  border: 1px solid transparent;
  transition-duration: .2s;

    &:focus{
      border: 1px solid var(--Primary);
    }
`;

const ResetPassword = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  cursor: pointer;
  color: var(--Dark_Gray_2);
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const ButtonAction = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: var(--Primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--White);
  margin: 30px 0;
  border: none;
  cursor: pointer;
`;

const LoginOptions = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: var(--Short-spaced);
  color: var(--Dark_Gray_2);

  & .social {
    width: 22px;
    height: 22px;
    cursor: pointer;
    &.face {
      color: #1877f2;
    }
  }
`;

const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 380px;
  height: 583px;
  object-fit: contain;
  &.left {
    position: absolute;
    left: 0;
    top: 0;
  }
  &.right {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export default LoginPage;
