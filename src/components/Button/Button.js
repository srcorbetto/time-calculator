import React from 'react';

import './Button.css';

const Button = props => {
    return (
        <div className="Button row">
            <div className="controlHolder col">
                <div onClick={props.decValue} className="valueChange dec"><i className="fas fa-minus"></i></div>
                <div className={'btnLabel ' + props.labelClass}>{props.btnLabel}</div>
                <div onClick={props.incValue} className="valueChange inc"><i className="fas fa-plus"></i></div>
            </div>
        </div>
    )
}

export default Button;