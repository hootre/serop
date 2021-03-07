import styled from '@emotion/styled';

export const MainHeader = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  max-height: 800px;
  & > ul > li {
    text-align: center;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 5px 33px;
    padding: 15px 0px;
    font-size: 20px;
    font-weight: bold;
    line-height: 45px;
    height: 100px;
    position: relative;
    overflow: hidden;
    color: #eee;
    user-select: none;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 43%;
      z-index: -10;
      width: 4px;
      height: 100%;
      padding: 1px;
      background-color: #00b0f0;
      transform: scaleY(0) translate(-50%, 2px);
      transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: bottom;
    }
    &.active::after,
    &:active::after,
    &:focus::after,
    &:hover::after {
      transform: scaleY(1) translate(-50%, -2px);
      transform-origin: top;
    }
  }
  & img {
    width: 50px;
    height: 50px;
    margin: 33px;
  }
`;

export const NavIconItem = styled.div`
  margin: 33px;
  margin-top: 200px;
  margin-left: 40px;
  cursor: pointer;
  & > svg {
    fill: #fff;
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & > svg:hover {
    fill: #0ebeff;
  }
`;
