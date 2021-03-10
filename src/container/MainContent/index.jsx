import React from 'react';
import styled from 'styled-components';

import haire from 'assets/images/haire.png';
import bike from 'assets/images/bike.png';
import box from 'assets/images/box.png';
import rear_wheel from 'assets/images/rear_wheel.png';
import front_wheel from 'assets/images/front_wheel.png';
import headlight from 'assets/images/headlight.png';

const MoveBike = styled.div`
  position: absolute;
  bottom: 70px;
  left: -100px;
  width: 150px;
  height: 130px;

  > img {
    position: absolute;

    &.move_bike_haire {
      left: 5px;
      top: 4px;
    }
    &.move_bike_bike {
    }
    &.move_bike_box {
      left: 15px;
      top: 34px;
    }
    &.move_bike_haire {
    }
    &.move_bike_rear_wheel {
      left: -5px;
      top: 94px;
    }
    &.move_bike_front_wheel {
      left: 114px;
      top: 100px;
    }
    &.move_bike_headlight {
      opacity: ${props => props.dayTime ? 0 : 1};
      left: 72%;
      top: 25px;
    }
  }
`
const MainContent = ({dayTime}) => {
  return (
    <div className="main-content">
      <MoveBike className="move_bike" dayTime={dayTime}>
        <img className="move_bike_haire" src={haire} alt=""/>
        <img className="move_bike_bike" src={bike} alt=""/>
        <img className="move_bike_box" src={box} alt=""/>
        <img className="move_bike_rear_wheel" src={rear_wheel} alt=""/>
        <img className="move_bike_front_wheel" src={front_wheel} alt=""/>
        <img className="move_bike_headlight" src={headlight} alt="" />
      </MoveBike>
    </div>
  );
};

export default MainContent;