import React from 'react';
import SubContent from "../SubContent";
import RadioButton from "../../components/Base/Header/Button/radioButton";
import styled from "styled-components";

const HeaderStyle = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

const SubContainer = () => {
    return (
        <>
            <RadioButton/>
            <SubContent/>
        </>
    );
};

export default SubContainer;