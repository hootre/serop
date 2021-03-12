import styled from '@emotion/styled';

export const TextTranstion = styled.div`
  font: 48px 'Fira Mono', monospace;
  overflow-x: hidden;
  color: #ffeb3b;
  background-color: #212121;
  & > switcher {
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*user-select:none;
    cursor:default;/*It's here if you want it*/
  }
  & > .switcher .shift {
    display: none;
  }

  .log {
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 24px;
  }
`;
