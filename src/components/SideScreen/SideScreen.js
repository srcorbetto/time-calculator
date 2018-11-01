import React from 'react';

import './SideScreen.css';

const SideScreen = props => {
    return (
        <div className={props.styleClass + ' SideScreen'}>
            <h3 className="headline pt-2">{props.headline}</h3>
            <h1 className={'hours ' + props.animationClass}>{props.hours}</h1>
        </div>
    )
}

export default SideScreen;