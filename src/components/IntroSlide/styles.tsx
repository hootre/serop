import styled from '@emotion/styled';

export const IntroBox = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 50px;
  background-image: url(https://itcm.co.kr/files/attach/images/813/596/782/325f0acced8215b4b49a8f5a9a207a8c.png);
  background-size: cover;
  display: flex;
`;
export const IntroContent = styled.div`
  width: 50%;
  height: 50%;
  flex: 1.2;
  display: flex;
  position: relative;
  top: 30%;
  flex-direction: column;
  color: #09102f;
  & > h1 {
    font-size: 7rem;
    padding-left: 50px;
    font-weight: bold;
  }
  & > span {
    font-size: 2rem;
    padding: 20px 0 50px 50px;
  }
  & > ul {
    display: flex;
    padding-left: 50px;
  }
  & > ul > li {
    padding: 10px;
  }
`;
export const IntroSlideImg = styled.div`
  flex: 1;
  overflow: hidden;
  & > ul {
    display: flex;
    position: relative;
    top: 10%;
  }
  & > ul > li {
    border: 1px solid #000;
    width: 300px;
    height: 500px;
  }
  & > ul > li.active {
  }
`;
export const SlideBtn = styled.div`
  width: 50px;
`;
