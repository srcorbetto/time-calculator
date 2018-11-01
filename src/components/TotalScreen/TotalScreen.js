import React from 'react';

import './TotalScreen.css';

const TotalScreen = props => {
    return (
        <div className="TotalScreen col">
            <h3 className="headline pt-2">{props.headline}</h3>
            <h1 className="totalHours">{props.hours}</h1>
        </div>
    )
}

export default TotalScreen;