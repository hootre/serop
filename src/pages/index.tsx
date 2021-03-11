import { Container } from '@components/GlobalStyles';
import IntroSlideContainer from '@container/IntroSlideContainer';
import ProfileContainer from '@container/ProfileContainer';
import ProjectContainer from '@container/ProjectContainer';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const onScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    window.removeEventListener('mousewheel', onScroll);
    console.log('스크롤이벤트');
    if (e.wheelDelta == 120) {
      // downscroll code
      console.log('up');
      const body = document.getElementsByTagName('body')[0];
      window.scrollTo({
        behavior: 'smooth',
        top: body.offsetTop,
      });
    } else {
      // upscroll code
      console.log('down');
    }
    setTimeout(() => {
      window.addEventListener('mousewheel', onScroll);
    }, 1000);
  }, []);
  useEffect(() => {
    window.addEventListener('mousewheel', onScroll);
  }, []);
  return (
    <>
      <Head>
        <title>DongJun PortFolio</title>
        <meta name="description" content="전동준의 포트폴리오 사이트입니다~"></meta>
      </Head>
      <IntroSlideContainer />
      {/* 프로젝트 들어갈 내용 
        1. 기간
        2. 이름
        3. 기술스택
        4. 내가 한 일
        5. 설명    
        */}
      <ProjectContainer />

      {/* PROFILE
       이름, 이메일, 깃헙
       Introduc
       자기소개 
      
      */}
      <ProfileContainer />
      {/*
        contact
        이메일 발송 폼 해도되고 안해도 되고 보류
        */}
      <Container />
    </>
  );
}
