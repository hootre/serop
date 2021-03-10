import Project from "@components/Project";
import useData from "@hooks/useData"
import { SlideData } from "src/util/db";

const ProjectContainer = () => {
  const {data:slideData, mutate} = useData();
  console.log(slideData)
    return(
            <Project slideData={slideData[0]} />
    )
}

export default ProjectContainer;