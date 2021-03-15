import React from 'react';
import './radioButton.scss';

const RadioButton = () => {
    return (
        <>
            <div className="md-radio md-radio-inline">
                <input id="3" type="radio" name="g2"/>
                <label htmlFor="3">
                    프랑스
                </label>
            </div>
            <div className="md-radio md-radio-inline">
                <input id="4" type="radio" name="g2"/>
                <label htmlFor="4">
                    영국
                </label>
            </div>
            <div className="md-radio md-radio-inline">
                <input id="5" type="radio" name="g2"/>
                <label htmlFor="5">
                    미국
                </label>
            </div>
        </>
    );
};

export default RadioButton;
