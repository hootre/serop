import GlobalStyles from '@components/GlobalStyles';
import FooterContainer from '@container/FooterContainer';
import TopContainer from '@container/TopContainer';
import React, { FC } from 'react';

const AppLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <TopContainer />
      {children}
      <FooterContainer />
      <GlobalStyles />
    </>
  );
};
export default AppLayout;
