import { VFC } from "react";
import { SlideData } from "src/util/db";
import { IconList, ProjectBackText, ProjectCard, ProjectLine } from "./styles";

interface Props{
    slideData : SlideData;
}
const Project : VFC<Props> = ({slideData}) => {
    return(
        <>
        <ProjectLine />
        <ProjectBackText className="fond">
                  <span className="s1">project</span>
                  <span className="s2">card</span>
        </ProjectBackText>
        <ProjectCard className="card">
          <div className="thumbnail">
            <img src={slideData.image} alt="Project Img"/>
          </div>
          <div className="content">
            <h1>{slideData.content}</h1>
            <h2>기간 : 2020-03 ~ 0202-04</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nam voluptatibus repellat porro voluptas minus, beatae non 
              inventore eligendi nihil earum. Eaque, praesentium possimus 
              ex mollitia quidem reprehenderit doloremque odio voluptatum 
              ipsa aspernatur ad nihil ipsam at sed, sit, laborum totam?</p>
          </div>
        <IconList>
            <li>
              git
            </li>
            <li>
              demo
            </li>
          </IconList>
        </ProjectCard>
        
        </>
    )
}

export default Project;