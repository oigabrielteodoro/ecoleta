import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    color: #6C6C80;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Ubuntu';
    color: #322153;
  }
`;