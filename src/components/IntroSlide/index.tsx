import { Container } from '@components/GlobalStyles';
import React from 'react';
import { IntroBox, IntroContent, IntroSlideImg, SlideBtn } from './styles';
import Slide from './Slide';

const IntroSlide = () => {
  return (
    <Container>
      <IntroBox>
        <IntroContent>
          <h1>Title Name</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, exercitationem.</span>
          <Slide />
        </IntroContent>
        <IntroSlideImg>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </IntroSlideImg>
        <SlideBtn>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </SlideBtn>
      </IntroBox>
    </Container>
  );
};

export default IntroSlide;
