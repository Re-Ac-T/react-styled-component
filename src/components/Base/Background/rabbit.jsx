import React from 'react';
import './rabbit.scss';

const Rabbit = () => {
    return (
        <div className="bar">
            <div className="back-sofa">
                <div className="rabbit-1">
                    <div className="rabbit-1__back-leg"></div>
                    <div className="rabbit-1__body"></div>
                    <div className="rabbit-1__arm1"></div>
                    <div className="rabbit-1__head">
                        <div className="rabbit-1__ear1"></div>
                        <div className="rabbit-1__ear2">
                            <div></div>
                        </div>
                        <div className="rabbit-1__mouth">
                            <div></div>
                        </div>
                        <div className="rabbit-1__nose"></div>
                        <div className="rabbit-1__eye1"></div>
                        <div className="rabbit-1__eye2"></div>
                    </div>
                    <div className="rabbit-1__leg"></div>
                    <div className="rabbit-1__arm2"></div>
                </div>
            </div>
        </div>
    );
};

export default Rabbit;
