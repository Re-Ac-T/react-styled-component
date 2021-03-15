import React, {useState} from 'react';
import SubContent from "../SubContent";
import RadioButton from "../../components/Base/Header/Button/radioButton";
import styled from "styled-components";
import romaBg from "../../assets/images/roma.png";
import amsterdamBg from "../../assets/images/amsterdam.png";

const SubPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundBg ? romaBg : amsterdamBg});
  background-size: cover;
  position: relative;
`;

const SubContainer = () => {
    const [changeCity, setChangeCity] = useState(true);
    return (
        <>
        <RadioButton changeCity={changeCity} />
        <SubPageLayout backgroundBg={changeCity}>
            <SubContent/>
        </SubPageLayout>
        </>
    );
};


export default SubContainer;