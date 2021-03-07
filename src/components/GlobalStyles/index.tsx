import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
        background-color: #00131a;
    }
    
`;
export const Container = styled.section`
  height: 100vh;
  padding: 0 10%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  outline: none;
`;
export default GlobalStyles;
