import React from 'react';
import styled from 'styled-components';

import './headerContainer.scss';

const HeaderStyle = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  
`
const HeaderContainer = ({dayTime, setDayTime}) => {
  return (
    <HeaderStyle>
      <div className="toggle toggle--daynight">
        <input type="checkbox" id="toggle--daynight" checked={dayTime} className="toggle--checkbox" onChange={()=>setDayTime(dayTime? false : true)}/>
        <label htmlFor="toggle--daynight" className="toggle--btn">
          <span className="toggle--feature"></span>
        </label>
      </div>
    </HeaderStyle>
  );
};

export default HeaderContainer;