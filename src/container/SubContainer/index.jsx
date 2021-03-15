import React, {useState} from 'react';
import SubContent from "../SubContent";
import RadioButton from "../../components/Base/Header/Button/radioButton";
import styled from "styled-components";
import romaBg from "../../assets/images/roma.png";
import amsterdamBg from "../../assets/images/amsterdam.png";

const SubPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundBg ? romaBg : amsterdamBg });
  background-size: cover;
  position: relative;
`;

const SubContainer = () => {
    const [changeCity, setChangeCity] = useState(null);
    console.log(changeCity);
    //
    // const changeCityName = () => {
    //     if(changeCity === 1){
    //         return "romaBg"
    //     }
    //     else if(changeCity === 2){
    //         return "amsterdamBg"
    //     }
    //
    // }

    return (
        <>
            <div className="md-radio md-radio-inline">
                <input id="3" type="radio" name="g2" value="1" onClick={()=>setChangeCity(1)}  />
                <label htmlFor="3">
                    프랑스
                </label>
            </div>
            <div className="md-radio md-radio-inline">
                <input id="4" type="radio" name="g2" value="2" onClick={()=>setChangeCity(2)}  />
                <label htmlFor="4">
                    영국
                </label>
            </div>
            {/*<RadioButton changeCity={changeCity} changeDayAndNight={changeDayAndNight}/>*/}
            <SubPageLayout backgroundBg={changeCity}>
                <SubContent/>
            </SubPageLayout>
        </>
    );
}

export default SubContainer;