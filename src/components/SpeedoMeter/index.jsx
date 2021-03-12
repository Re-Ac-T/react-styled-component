import React from 'react';
import styled from 'styled-components';

import 'assets/sass/font.scss';

const SpeedMeterStyle = styled.div`
  position: absolute;
  top:0; left:0; right: 0; bottom: 0;
  z-index: 10;
  margin: auto auto;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background: #000;
  font-size: 50px;
  font-family: "digital";
  color: mintcream;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SpeedMeter = ({speed, MotorcycleAxel, MotorcycleBrake}) => {
  console.log('스피드',speed)
  return (
    <SpeedMeterStyle>
      <p>{speed}</p>
      <div>
        <span onClick={MotorcycleAxel}>up</span>
        <span onClick={MotorcycleBrake}>down</span>
      </div>
    </SpeedMeterStyle>
  );
};

export default SpeedMeter;