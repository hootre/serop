import styled from '@emotion/styled';
const images = [
  'https://images.unsplash.com/photo-1483068612337-c045daaca40e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=6de8746a693acc34ebe9e9a15c4c18d1',
  'https://images.unsplash.com/photo-1489914099268-1dad649f76bf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=f21f40bb93bae58300e83f7f72ebb5a5',
  'https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=247f52de1a292b8a1877b0c7dd77a291',
  'https://images.unsplash.com/photo-1494783404829-a93883e74b68?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=413f5f5c41f4db69a1474d92419601ac',
];
export const IntroBox = styled.div`
  width: 100%;
  height: 70vh;
  margin: auto auto;
  overflow: hidden;
  position: relative;
  -webkit-box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  border-radius: 50px;
  background-image: url(https://itcm.co.kr/files/attach/images/813/596/782/325f0acced8215b4b49a8f5a9a207a8c.png);
  background-size: cover;
  display: flex;
  & svg {
    position: absolute;
    z-index: 1;
  }

  & circle {
    stroke: #fff;
    fill: none;
    transition: 0.3s;
  }

  & #svg1 {
    circle {
      transition-timing-function: linear;
    }
  }

  & #svg2 {
    circle {
      transition-timing-function: linear;
    }
  }

  ${forCircle10(1, 'circle', 9)}
  ${forCircle10(10, 'circle', 9)}
`;
export const BackSlider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-flex;
  overflow: hidden;
`;
export const IntroContent = styled.div`
  width: 50%;
  height: 50%;
  flex: 1.2;
  display: flex;
  position: relative;
  top: 35%;
  flex-direction: column;
  color: #09102f;
  & > div > h1 {
    font-size: 7rem;
    font-weight: bold;
    max-height: 70px;
    line-height: 70px;
    overflow: hidden;
  }
  & > div > .textAnimation {
    animation-name: clip-text;
  }
  & > div > h1:after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00131a;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
  }
  & > div > .textAnimation:after {
    animation-name: text-revealer;
  }
  & > div > h1,
  & > div > h1:after {
    animation-delay: var(--animation-delay, 500ms);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 800ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  & > div > span {
    font-size: 3rem;
    max-height: 134px;
    position: absolute;
    top: 150%;
    overflow: hidden;
  }
  & > div > span:after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00131a;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
  }
  & > div > span,
  & > div > span:after {
    animation-delay: var(--animation-delay, 1000ms);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 800ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  & > div > ul {
    display: flex;
    position: absolute;
    top: 250%;
  }
  & > div > ul:after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00131a;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
  }
  & > div > ul,
  & > div > ul:after {
    animation-delay: var(--animation-delay, 1000ms);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 800ms);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  & > div > ul li {
    padding: 10px;
  }
  & > .nav-item {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 10%;
  }
  & > .nav-item.nav-selected {
    opacity: 1;
  }
  @keyframes clip-text {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  @keyframes text-revealer {
    0%,
    50% {
      transform-origin: 0 50%;
    }

    60%,
    100% {
      transform-origin: 100% 50%;
    }

    60% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(0);
    }
  }
`;
export const IntroSlideBox = styled.div`
  flex: 1;
  width: 100px;
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
  & img {
    opacity: 0.7;
  }
  & img.is-selected {
    opacity: 1;
  }
`;

function Circle(i: number, className: string) {
  return `
    & .${className + i}{
      transition-delay: ${i / 20}s;
    }
  `;
}

function forCircle10(startNum: number, className: string, length: number) {
  let str = '';
  for (let i = startNum; i < startNum + length; i++) {
    str += Circle(i, className);
  }
  return str;
}
