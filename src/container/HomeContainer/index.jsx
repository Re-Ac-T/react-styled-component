import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import dayBg from 'assets/images/day_bg.jpg';
import nightBg from 'assets/images/night_bg.jpg';

import {MainContent, HeaderContainer} from 'container';


const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundBg});
  background-size: cover;
`

const HomeContainer = () => {
  const [ dayTime, setDayTime] = useState(true);

  return (
    <HomeLayout backgroundBg={ dayTime ? dayBg : nightBg }>
      <HeaderContainer dayTime={dayTime} setDayTime={setDayTime}/>
      <MainContent />
    </HomeLayout>
  );
};

export default HomeContainer;