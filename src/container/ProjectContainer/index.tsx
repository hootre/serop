import Project from '@components/Project';
import useData from '@hooks/useData';
import { useCallback, useState } from 'react';
import { SlideData } from 'src/util/db';

const ProjectContainer = () => {
  const [isProjectCurrnet, setIsProjectCurrent] = useState(0);
  const { data: slideData, mutate } = useData();
  console.log(slideData.length);
  const onPrevButton = useCallback(() => {
    setIsProjectCurrent(isProjectCurrnet > 0 ? isProjectCurrnet - 1 : slideData.length - 1);
  }, [isProjectCurrnet]);
  const onNextButton = useCallback(() => {
    setIsProjectCurrent(isProjectCurrnet < slideData.length - 1 ? isProjectCurrnet + 1 : 0);
  }, [isProjectCurrnet]);

  return (
    <Project
      slideData={slideData}
      onPrevButton={onPrevButton}
      onNextButton={onNextButton}
      onIsProjectCurrnet={isProjectCurrnet}
    />
  );
};

export default ProjectContainer;
