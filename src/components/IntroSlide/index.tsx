import { Container } from '@components/GlobalStyles';
import React, { createRef, useCallback, useEffect, useRef, useState, VFC } from 'react';
import { IntroBox, BackSlider, IntroContent, IntroSlideBox, ScrollMouse } from './styles';
import Flickity from 'react-flickity-component';

import 'flickity/css/flickity.css';
import { SlideData } from 'src/util/db';
interface Props {
  handleSlide: (e: any) => void;
  slideData: SlideData;
}
const IntroSlide: VFC<Props> = ({ handleSlide, slideData }) => {
  const flickityMainOptions = {
    initialIndex: 1,
    selectedAttraction: 0.25,
  };
  const onHandleSlide = useCallback((e) => {
    handleSlide(e);
  }, []);
  return (
    <Container>
      <IntroBox slideList={slideData.length}>
        <svg id="svg1" className="up2" xmlns="http://www.w3.org/2000/svg">
          <circle id="circle1" className="circle1 steap" cx="50%" cy="49%" r="3%" />
          <circle id="circle2" className="circle2 steap" cx="50%" cy="49%" r="10%" />
          <circle id="circle3" className="circle3 steap" cx="50%" cy="49%" r="15%" />
          <circle id="circle4" className="circle4 steap" cx="50%" cy="49%" r="20%" />
          <circle id="circle5" className="circle5 steap" cx="50%" cy="49%" r="25%" />
          <circle id="circle6" className="circle6 steap" cx="50%" cy="49%" r="32%" />
          <circle id="circle7" className="circle7 steap" cx="50%" cy="49%" r="39%" />
          <circle id="circle8" className="circle8 steap" cx="50%" cy="49%" r="46%" />
          <circle id="circle9" className="circle9 steap" cx="50%" cy="49%" r="53%" />
          <circle id="circle10" className="circle10 steap" cx="50%" cy="49%" r="60%" />
          <circle id="circle11" className="circle11 steap" cx="50%" cy="49%" r="67%" />
        </svg>
        <IntroContent>
          {slideData.map((slide, index) => {
            return (
              <div className={index === 1 ? 'nav-item nav-selected' : 'nav-item'}>
                <h1 className="textAnimation">
                  <span>{slide.title}</span>
                </h1>
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
        <IntroSlideBox onClick={onHandleSlide} id="slideBox">
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
        {slideData.map((item, index) => {
          return <div id={`slide${index + 1}`} className={`slide${index + 1} ${index === 1 ? 'up1' : ' '}`}></div>;
        })}
      </IntroBox>
      <ScrollMouse>
        <svg className="mouse" xmlns="..." viewBox="0 0 76 130" preserveAspectRatio="xMidYmid meet">
          {' '}
          <g fill="none" fill-rule="evenodd">
            {' '}
            <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="3" rx="36" />{' '}
            <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF" />{' '}
          </g>{' '}
        </svg>
      </ScrollMouse>
    </Container>
  );
};

export default IntroSlide;
