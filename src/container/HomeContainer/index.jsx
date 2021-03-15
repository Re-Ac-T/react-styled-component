import React, {useState} from 'react';
import styled from 'styled-components';
import {random} from 'utils/Utils';

import dayBg from 'assets/images/day_bg.jpg';
import nightBg from 'assets/images/night_bg.jpg';
import buildingLight_1 from 'assets/images/building_light1.png';
import buildingLight_2 from 'assets/images/building_light2.png';

import {MainContent, HeaderContainer} from 'container';


const HomeLayout = styled.div`
  width: 1920px;
  height: 100vh;
  background: url(${props => props.backgroundBg ? dayBg : nightBg});
  background-size: cover;
  position: relative;
  background-repeat: repeat-x;

  animation: backgroundMove 10s infinite linear;
  @keyframes backgroundMove {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 265%;
    }
  }
`

const HomeLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 100vh;
  opacity: ${props => props.backgroundBg && '0 !important'};
  background: url(${props => props.name === 'light_1' ? `${buildingLight_1}` : `${buildingLight_2}`}); 
  background-size: cover;
  background-repeat: repeat-x;
  pointer-events: none;
  animation: ${props => props.name === 'light_1' ? 'builddingLightMove_1' : 'builddingLightMove_2'} 10s infinite linear;

  @keyframes builddingLightMove_1 {
    0% {
      background-position: 0%;
      opacity: ${props => props.backgroundBg? 0 : 0};
    }
    1% {
      opacity: ${props => props.backgroundBg? 0 : 1};
    }
    4% {
      opacity: ${props => props.backgroundBg? 0 : 0};
    }
    7% {
      opacity: ${props => props.backgroundBg? 0 : 1};
    }
    100% {
      opacity: ${props => props.backgroundBg? 0 : 1};
      background-position: 265%;
    }
  }
  @keyframes builddingLightMove_2 {
    0% {
      background-position: 0%;
      opacity: ${props => props.backgroundBg? 0 : 0};
    }
    2% {
      opacity: ${props => props.backgroundBg? 0 : 1};
    }
    5% {
      opacity: ${props => props.backgroundBg? 0 : 0};
    }
    7% {
      opacity: ${props => props.backgroundBg? 0 : 1};
    }
    100% {
      opacity: ${props => props.backgroundBg? 0 : 1};
      background-position: 265%;
    }
  }
`

const HomeContainer = () => {
    const [dayTime, setDayTime] = useState(true);
    const [soliloquy, setSoliloquy] = useState({message: '가자가자', count: 0});
    const talk = {
        day: ['출근길이 막히네', '이제 출근하지만 벌써 집가고싶다...', '졸려', '. . .', '좋은 아침~'],
        night: ['칼퇴근이다', '집까지 5분', '야식 뭐먹지', '길 안막혀서 좋다', '음주운전, 졸음운전 금지'],
    }

    const changeDayAndNight = () => {
        setDayTime(!dayTime)
        setSoliloquy({message: '가자가자', count: 0});
    }

    const stopConversation = () => {
        if (soliloquy.count > 10) {
            setSoliloquy({message: '이제 운전 집중헤야해', count: 0});
            return false;
        }
    };

    const conversation = () => {
        if (dayTime) {
            setSoliloquy({message: talk.day[random(5)], count: soliloquy.count + 1});
            stopConversation();
        } else {
            setSoliloquy({message: talk.night[random(5)], count: soliloquy.count + 1});
            stopConversation();
        }
    }
    return (
        <>
            <HeaderContainer dayTime={dayTime} changeDayAndNight={changeDayAndNight}/>
            <HomeLayout backgroundBg={dayTime}/>
            <HomeLight backgroundBg={dayTime} name={'light_1'}/>
            <HomeLight backgroundBg={dayTime} name={'light_2'}/>
            <MainContent dayTime={dayTime} conversation={conversation} soliloquy={soliloquy}/>
        </>
    );
};

export default HomeContainer;