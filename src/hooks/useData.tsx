import React from 'react';
import useSWR from 'swr';
declare global {
  interface Window {
    projectData: Object;
  }
}
const useData = () => {
  const { data, mutate } = useSWR('state', () => window.projectData);
  return {
    data: [
      {
        title: 'React-Card-App',
        content: '리엑트, Firebase를 활용한 명함 제작 사이트입니다',
        image: 'http://placehold.it/200x250',
        backImage: 'https://itcm.co.kr/files/attach/images/813/596/782/325f0acced8215b4b49a8f5a9a207a8c.png',
        skill: ['React', 'firebase', 'redux', 'PostCSS'],
      },
      {
        title: 'React-Movie-App',
        content: '니콜라스 강의를 듣고 만든 영화사이트입니다',
        image: 'http://placehold.it/200x250',
        backImage:
          'https://images.unsplash.com/photo-1489914099268-1dad649f76bf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=f21f40bb93bae58300e83f7f72ebb5a5',
        skill: ['React', 'firebase', 'redux', 'PostCSS'],
      },
      {
        title: 'Slack 클론 코딩',
        content: '제로초님의 강의를 듣고 만든 슬랙 클론 코딩입니다',
        image: 'http://placehold.it/200x250',
        backImage:
          'https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=247f52de1a292b8a1877b0c7dd77a291',
        skill: ['React', 'firebase', 'redux', 'PostCSS'],
      },
    ],
    mutate: (projectData: Object) => {
      window.projectData = projectData || '';
      return mutate();
    },
  };
};

export default useData;
