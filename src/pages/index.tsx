import IntroSlideContainer from '@container/IntroSlideContainer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DongJun PortFolio</title>
        <meta name="description" content="전동준의 포트폴리오 사이트입니다~"></meta>
      </Head>
      <IntroSlideContainer />
    </>
  );
}
