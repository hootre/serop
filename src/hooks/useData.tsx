import React from "react";
import useSWR from "swr";
declare global {
    interface Window {
        projectData: Object;
    }
  }
const useData = () => {
    const {data, mutate} = useSWR('state', () => window.projectData)
    return {data
        :   [
            {
              title: 'React-Card-App',
              content: '리엑트, Firebase를 활용한 명함 제작 사이트입니다',
              image: 'http://placehold.it/200x250',
              skill: ['React', 'firebase', 'redux', 'PostCSS'],
            },
            {
              title: 'React-Movie-App',
              content: '니콜라스 강의를 듣고 만든 영화사이트입니다',
              image: 'http://placehold.it/200x250',
              skill: ['React', 'firebase', 'redux', 'PostCSS'],
            },
            {
              title: 'Slack 클론 코딩',
              content: '제로초님의 강의를 듣고 만든 슬랙 클론 코딩입니다',
              image: 'http://placehold.it/200x250',
              skill: ['React', 'firebase', 'redux', 'PostCSS'],
            },
          ], mutate: (projectData: Object) => {
      window.projectData = projectData || '';
      return mutate()
    }}
  }

  export default useData;