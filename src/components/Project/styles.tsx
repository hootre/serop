import styled from '@emotion/styled';



export const ProjectLine = styled.div`
    position: absolute;
    top : 0;
    bottom : 0;
    left : 50%;
    width : 5px;
    transform: translateX(-50%);
    background-color : #fff;
    &::before{
  content: "";
  display: block;
        width : 30px;
        height : 30px;
        border-radius : 50%;
        background-color : #fff;
        position: absolute;
        top : 0;
        left : -13px;
    }
`;
export const ProjectBackText = styled.div`
    & > span.s1 {
        position : absolute;
	top : 5%;
    left : 15%;
    font-size : 15rem;
	font-weight : 800;
	text-transform : uppercase;
    color : #3C4447;
    }
    & > span.s2 {
        font-weight: 800;
    position: absolute;
    bottom: 10%;
    right: 13%;
    font-size: 15rem;
    text-transform: uppercase;
    color: #3C4447;
    }
`;

export const ProjectCard = styled.div`

position: relative;
    height: 90rem;
    width: 100%;
    margin: 200px auto;
    background-color: #FFF;
    -webkit-box-shadow: 10px 10px 93px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 93px 0px rgb(0 0 0 / 75%);
    & > div.thumbnail{
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
    
    & > img{
        position: absolute;
    left: 50%;
    top: 50%;
    height: auto;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    }
}
    & > div.content{
      margin-left : 60%; 
      margin-right : 2rem;
    & > h1 {
        padding : 3rem 0px;
    font-size: 3rem;
    color: #4B4B4B;
    }
    & > p{
        text-align: justify;
    padding-top: 1rem;
    font-size: 2rem;
    line-height: 150%;
    color: #4B4B4B;
    }
     
}
    `;

    export const IconList = styled.ul`
        position: absolute;
        bottom : 10%;

    & > li {
        display: inline;
    list-style: none;
    padding-right: 40px;
    color: #7B7B7B;
    }
    `;