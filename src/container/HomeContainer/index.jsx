import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import dayBg from 'assets/images/day_bg.jpg';
import nightBg from 'assets/images/night_bg.jpg';
import buildingLight_1 from 'assets/images/building_light1.png';
import buildingLight_2 from 'assets/images/building_light2.png';

import {MainContent, HeaderContainer} from 'container';


const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundBg ? dayBg : nightBg});
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${buildingLight_1});
    background-size: cover;
    opacity: ${props => props.backgroundBg? 0 : 1};
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${buildingLight_2});
    background-size: cover;
    opacity: ${props => props.backgroundBg? 0 : 1};
  }

`

const HomeContainer = () => {
  const [ dayTime, setDayTime] = useState(true);
  useEffect(()=> {
    console.log(dayTime)
  })
  return (
    <HomeLayout backgroundBg={dayTime}>
      <HeaderContainer dayTime={dayTime} setDayTime={setDayTime} />
      <MainContent dayTime={dayTime} />
    </HomeLayout>
  );
};

export default HomeContainer;