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
    html{
        font-size: 10px;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
        background-color: #00131a;
    }
    @media all and (min-width:768px) and (max-width:1523px) {
        html{
            font-size: 8px;
        }
        
    }
    @media all and (max-width:767px) {
        html{
            font-size: 5px;
        }
    }
    // flickity css
    .carousel{
        top: 33%;
    }
    .flickity-button{
        display: none;
    }
    .flickity-page-dots > .dot {
        background-color: #fff;
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
  position: relative;
`;
export default GlobalStyles;
