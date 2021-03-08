import { Container } from '@components/GlobalStyles';
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { IntroBox, BackSlider, IntroContent, IntroSlideBox } from './styles';
import Flickity from 'react-flickity-component';

import 'flickity/css/flickity.css';

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

const IntroSlide = () => {
  // 콜백Ref예시
  // const curImg = useCallback((node) => {
  //   if (node !== null) {
  //     setIsSelecte(node.carousel.childElementCount);
  //   }
  // }, []);
  let isSelecte = 0;
  let isClicking = true;
  const handleSlide = useCallback(() => {
    if (isClicking) {
      isClicking = false;
      const slideBox = document.getElementsByClassName('is-selected');
      const contentBox = document.getElementsByClassName('nav-item');
      isSelecte = parseInt(slideBox[0].alt);

      console.log(isSelecte);
      Array.from(contentBox).map((item, index) => {
        item.classList.remove('nav-selected');
        if (index === isSelecte) {
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

      isClicking = true;
    }
  }, []);

  const flickityMainOptions = {
    initialIndex: 1,
    selectedAttraction: 0.01,
    prevNextButtons: false,
  };

  let curpage = 1;
  let sliding = false;
  let click = true;
  let pagePrefix = 'slide';
  let transitionPrefix = 'circle';
  let svg = true;
  function rightSlide() {
    if (click) {
      if (curpage == 4) curpage = 0;
      console.log('woek');
      sliding = true;
      curpage++;
      svg = false;
      click = false;
      for (let k = 1; k <= 4; k++) {
        let a1 = document.getElementById(pagePrefix + k);
        a1.className += ' tran';
      }
      setTimeout(() => {
        move();
      }, 200);
      setTimeout(() => {
        for (let k = 1; k <= 4; k++) {
          let a1 = document.getElementById(pagePrefix + k);
          a1.classList.remove('tran');
        }
      }, 1400);
    }
  }
  function useCounter() {
    const { data, mutate } = useSWR('state', () => window.count);
    return {
      data,
      mutate: (count) => {
        window.count = count;
        return mutate();
      },
    };
  }
  function move() {
    if (sliding) {
      sliding = false;
      if (svg) {
        for (let j = 1; j <= 9; j++) {
          let c = document.getElementById(transitionPrefix + j);
          c.classList.remove('steap');
          c.setAttribute('class', transitionPrefix + j + ' streak');
          console.log('streak');
        }
      } else {
        for (let j = 10; j <= 18; j++) {
          let c = document.getElementById(transitionPrefix + j);
          c.classList.remove('steap');
          c.setAttribute('class', transitionPrefix + j + ' streak');
          console.log('streak');
        }
      }
      setTimeout(() => {
        for (let i = 1; i <= 4; i++) {
          if (i == curpage) {
            let a = document.getElementById(pagePrefix + i);
            a.className += ' up1';
          } else {
            let b = document.getElementById(pagePrefix + i);
            b.classList.remove('up1');
          }
        }
        sliding = true;
      }, 600);
      setTimeout(() => {
        click = true;
      }, 1700);

      setTimeout(() => {
        if (svg) {
          for (let j = 1; j <= 9; j++) {
            let c = document.getElementById(transitionPrefix + j);
            c.classList.remove('streak');
            c.setAttribute('class', transitionPrefix + j + ' steap');
          }
        } else {
          for (let j = 10; j <= 18; j++) {
            let c = document.getElementById(transitionPrefix + j);
            c.classList.remove('streak');
            c.setAttribute('class', transitionPrefix + j + ' steap');
          }
          sliding = true;
        }
      }, 850);
      setTimeout(() => {
        click = true;
      }, 1700);
    }
  }
  return (
    <Container>
      <IntroBox>
        <BackSlider>
          <svg id="svg2" className="up2" xmlns="http://www.w3.org/2000/svg">
            <circle id="circle1" className="circle1 steap" cx="34px" cy="49%" r="20" />
            <circle id="circle2" className="circle2 steap" cx="34px" cy="49%" r="100" />
            <circle id="circle3" className="circle3 steap" cx="34px" cy="49%" r="180" />
            <circle id="circle4" className="circle4 steap" cx="34px" cy="49%" r="260" />
            <circle id="circle5" className="circle5 steap" cx="34px" cy="49%" r="340" />
            <circle id="circle6" className="circle6 steap" cx="34px" cy="49%" r="420" />
            <circle id="circle7" className="circle7 steap" cx="34px" cy="49%" r="500" />
            <circle id="circle8" className="circle8 steap" cx="34px" cy="49%" r="580" />
            <circle id="circle9" className="circle9 steap" cx="34px" cy="49%" r="660" />
          </svg>
          <svg id="svg1" className="up2" xmlns="http://www.w3.org/2000/svg">
            <circle id="circle10" className="circle10 steap" cx="648px" cy="49%" r="20" />
            <circle id="circle11" className="circle11 steap" cx="648px" cy="49%" r="100" />
            <circle id="circle12" className="circle12 steap" cx="648px" cy="49%" r="180" />
            <circle id="circle13" className="circle13 steap" cx="648px" cy="49%" r="260" />
            <circle id="circle14" className="circle14 steap" cx="648px" cy="49%" r="340" />
            <circle id="circle15" className="circle15 steap" cx="648px" cy="49%" r="420" />
            <circle id="circle16" className="circle16 steap" cx="648px" cy="49%" r="500" />
            <circle id="circle17" className="circle17 steap" cx="648px" cy="49%" r="580" />
            <circle id="circle18" className="circle18 steap" cx="648px" cy="49%" r="660" />
          </svg>
          <IntroContent>
            {slideData.map((slide, index) => {
              return (
                <div className={index === 1 ? 'nav-item nav-selected' : 'nav-item'}>
                  <h1 className="textAnimation">{slide.title}</h1>
                  <span className="textAnimation">{slide.content}</span>
                  <ul className="textAnimation">
                    {slide.skill.map((item: string | undefined) => {
                      return (
                        <li key={item}>
                          <img src="http://placehold.it/50x50" alt={item} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </IntroContent>
          <IntroSlideBox onClick={handleSlide} id="slideBox">
            <Flickity
              className={'carousel carousel-main slider'} // default ''
              elementType={'div'} // default 'div'
              options={flickityMainOptions} // takes flickity options {}
              disableImagesLoaded={true} // default false
              reloadOnUpdate // default false
              static // default false
            >
              {slideData.map((slide, index) => {
                return <img style={{ marginLeft: 12, marginRight: 12 }} src={slide.image} alt={index + ''} />;
              })}
            </Flickity>
          </IntroSlideBox>
        </BackSlider>
      </IntroBox>
    </Container>
  );
};

export default IntroSlide;
