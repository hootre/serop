import styled from '@emotion/styled';

export const ProjectContent = styled.div`
  position: absolute;
  display: block;
  width: 80%;
  height: 65%;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 93px 0px rgb(0 0 0 / 75%);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgb(0 0 0 / 75%);
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;
export const ProjectLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 5px;
  transform: translateX(-50%);
  background-color: #fff;
  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: -13px;
  }
`;
export const ProjectBackText = styled.div`
  & > span.s1 {
    position: absolute;
    top: 5%;
    left: 15%;
    font-size: 15rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #3c4447;
  }
  & > span.s2 {
    font-weight: 800;
    position: absolute;
    bottom: 10%;
    right: 13%;
    font-size: 15rem;
    text-transform: uppercase;
    color: #3c4447;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 200ms linear;
  &.active {
    opacity: 1;
  }
  & > div.thumbnail {
    float: left;
    position: relative;
    left: 30px;
    top: -30px;
    height: 50rem;
    width: 50%;
    -webkit-box-shadow: 10px 10px 60px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 60px 0px rgb(0 0 0 / 75%);
    overflow: hidden;

    & > img {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  & > div.content {
    margin-left: 60%;
    margin-right: 2rem;
    & > h1 {
      padding: 3rem 0px;
      font-size: 3rem;
      font-weight: bold;
      color: #4b4b4b;
    }
    & > p {
      text-align: justify;
      padding-top: 1rem;
      font-size: 2rem;
      line-height: 150%;
      color: #4b4b4b;
      height: 250px;
    }
  }
`;

export const IconList = styled.ul`
  position: absolute;
  bottom: 30%;

  & > li {
    display: inline-block;
    list-style: none;
    padding-right: 40px;
    color: #7b7b7b;
  }
  & > li.github_icon > svg {
    width: 50px;
    height: 50px;
  }
  & > li.github_icon > a {
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }
  & > li.demo_icon > svg {
    width: 50px;
    height: 50px;
  }
`;

export const MoveButton = styled.div`
  position: absolute;
  bottom: 10%;
  right: 20%;
  display: flex;
  & > button {
    display: flex;
    overflow: hidden;
    margin: 1rem;
    padding: 1.2rem;
    cursor: pointer;
    transition: all 150ms linear;
    text-align: center;
    color: #000;
    border: 0 none;
    border-radius: 3rem;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3;
    justify-content: center;
    align-items: center;
    flex: 0 0 160px;
    box-shadow: 2px 5px 10px #e4e4e4;
  }
  & > button:hover {
    color: #202129;
    background-color: #e1e2e2;
    opacity: 1;
  }
  & > button:focus {
    outline: none;
    border: none;
  }
`;
