import React, {useState} from 'react';
import styled from 'styled-components';
import {random} from 'utils/Utils';

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

  background-repeat: repeat-x;
  background-position: 290%;
  
  animation-name: backgroundMove;
  animation-iteration-count: infinite;
  animation-duration: 20s;
  
  @keyframes backgroundMove {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${buildingLight_1});
    background-size: cover;
    opacity: ${props => props.backgroundBg ? 0 : 1};
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${buildingLight_2});
    background-size: cover;
    opacity: ${props => props.backgroundBg ? 0 : 1};
    pointer-events: none;
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
            <MainContent dayTime={dayTime} conversation={conversation} soliloquy={soliloquy}/>
        </>
    );
};

export default HomeContainer;