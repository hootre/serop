import { Container } from '@components/GlobalStyles';
import IntroSlideContainer from '@container/IntroSlideContainer';
import Head from 'next/head';
import { isObject } from 'node:util';
import { useCallback, useEffect } from 'react';

export default function Home() {
  let throttle = true;
const onScroll = useCallback(
  (e) => {
    if(throttle){
      
      throttle = false;
      setTimeout(()=>{
        console.log("스크롤이벤트")
        
        // 리스트 셀렉트 해두고 1번쨰 section-select
        // 아래로 했을 때 현재 셀렉트에 다음 것으로 이동
        // 현재 셀렉트 기준을 두고 위 아래로 이동 
        // 맨 위일때는 위로 이벤트 x
        // 이걸로 노트북으로 할 수 있는 일 끝
        // 구조 -> 
        // Intro
        // Main Project
        // About Me
        // contact me
        // End
        throttle = true;
      }, 1000);
    }
    
  },
  [],
)
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <Head>
        <title>DongJun PortFolio</title>
        <meta name="description" content="전동준의 포트폴리오 사이트입니다~"></meta>
      </Head>
      <IntroSlideContainer />
      <Container />
      <Container />
    </>
  );
}
