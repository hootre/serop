import React, { useCallback } from 'react';
import IntroSlide from '@components/IntroSlide';

const slideData = [
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
];
const IntroSlideContainer = () => {
  // onClick
  let isSelecte = 0;
  let isClicking = true;
  const handleSlide = useCallback((e) => {
    e.preventDefault();
    if (isClicking) {
      isClicking = false;
      const slideBox = document.getElementsByClassName('is-selected');
      const contentBox = document.getElementsByClassName('nav-item');
      isSelecte = parseInt(slideBox[0].alt);

      // 좌 우 클릭시 이동
      if (e.target.alt > isSelecte) {
        document.getElementsByClassName('next')[0].click();
      } else if (e.target.alt < isSelecte) {
        document.getElementsByClassName('previous')[0].click();
      }
      isSelecte = parseInt(slideBox[0].alt);
      // CSS 이벤트 리셋
      Array.from(contentBox).map((item, index) => {
        item.classList.remove('nav-selected');
        if (index === isSelecte) {
          SlideAction(isSelecte, contentBox.length);
          console.log(isSelecte);
          document.getElementById('slideBox').style.pointerEvents = 'none';
          item.childNodes[0].classList.remove('textAnimation');
          item.childNodes[1].classList.remove('textAnimation');
          item.childNodes[2].classList.remove('textAnimation');
          setTimeout(function () {
            item.childNodes[0].classList.add('textAnimation');
            item.childNodes[1].classList.add('textAnimation');
            item.childNodes[2].classList.add('textAnimation');
          }, 0);
          item.classList.add('nav-selected');
        }
      });

      setTimeout(() => {
        isClicking = true;
        document.getElementById('slideBox').style.pointerEvents = 'auto';
      }, 2000);
    }
  }, []);

  // slide svg
  let sliding = false;
  let click = true;
  let pagePrefix = 'slide';
  let transitionPrefix = 'circle';
  function SlideAction(curSlide: number, slideLength: number) {
    if (click) {
      sliding = true;
      click = false;
      for (let k = 1; k <= slideLength; k++) {
        let a1 = document.getElementById(pagePrefix + k);
        a1.className += ' tran';
      }
      setTimeout(() => {
        move(curSlide, slideLength);
      }, 200);
      setTimeout(() => {
        for (let k = 1; k <= slideLength; k++) {
          let a1 = document.getElementById(pagePrefix + k);
          a1?.classList.remove('tran');
        }
      }, 1400);
    }
  }
  function move(curSlide: number, slideLength: number) {
    if (sliding) {
      sliding = false;
      for (let j = 1; j <= 12; j++) {
        let c = document.getElementById(transitionPrefix + j);
        c?.classList.remove('steap');
        c?.setAttribute('class', transitionPrefix + j + ' streak');
        console.log('streak');
      }
      setTimeout(() => {
        for (let i = 1; i <= slideLength; i++) {
          if (i == curSlide + 1) {
            let a = document.getElementById(pagePrefix + i);
            a.className += ' up1';
          } else {
            let b = document.getElementById(pagePrefix + i);
            b?.classList.remove('up1');
          }
        }
        sliding = true;
      }, 600);
      setTimeout(() => {
        click = true;
      }, 1700);

      setTimeout(() => {
        for (let j = 1; j <= 12; j++) {
          let c = document.getElementById(transitionPrefix + j);
          c?.classList.remove('streak');
          c?.setAttribute('class', transitionPrefix + j + ' steap');
        }
        sliding = true;
      }, 1000);
      setTimeout(() => {
        click = true;
      }, 1700);
    }
  }

  return (
    <>
      <IntroSlide handleSlide={handleSlide} slideData={slideData} />
    </>
  );
};
export default IntroSlideContainer;
