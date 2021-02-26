import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #1d1d1d;
    color: #fff;
    -webkit-font-smooth: antialiased;
    background-image: url("https://www.luby.com.br/wp-content/uploads/2020/05/Logo_Luby.png");
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: 20px 20px;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  p {
    font-weight: 100;
    font-size: 14px;
  }

  button{
    cursor: pointer;
  }
`;
