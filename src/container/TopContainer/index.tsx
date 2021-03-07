import React, { useCallback } from 'react';
import Top from '@components/Top';

const TopContainer = () => {
  const onMouseClick = useCallback((e) => {
    const eClassList = e.target.classList;
    eClassList.contains('active') ? eClassList.remove('active') : eClassList.add('active');
  }, []);
  return (
    <>
      <Top onMouseClick={onMouseClick} />
    </>
  );
};
export default TopContainer;
