import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    outline: none;
  }

  &:root{
    //Color Scale
    --Primary: #C92071;
    --Primary_G: linear-gradient(180deg, #C92071 0%, #EDABCA 100%);
    --Secundary: #B5B6F2;
    --Secundary_G: linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 70%, transparent);
    --Tertiary: #991956;
    --Error: #EE4266;
    --Sucess: #52CA76;
    --Warning: #F6AA1C;
    --Attention: #E7FF86;
    --Special_Blue: #D8E3F2;
//---------------------------------------------------------------

    //Grays Scale
    --Dark_Gray: #1F1F1F;
    --Dark_Gray_2: #474747;
    --Dark_Gray_3: #666666;
    --Light_Gray:#8F8F8F;
    --Light_Gray_2:#CCCCCC;
    --Light_Gray_3: #F5F5F5;
    --White: #FFFFFF;

    //Shadows
    --Slaved: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
    --Slaved-hover: 0px 4px 25px 0px #C9207180;

    //spacing:
    --Large-spaced: 1px;
    --Short-spaced: .75px;

    //Border Radius
    --Rounded_Default: 8px;
    --Rounded_Full: 50%;
    --Pill-Rounded: 29px;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
