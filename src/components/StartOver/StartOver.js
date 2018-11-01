import React from 'react';

import './StartOver.css';

const StartOver = props => {
    return (
        <div className="StartOver row">
            <div className="col">
                <div onClick={props.startOver} className="startOverBtn dec">Start Over</div>
            </div>
        </div>
    )
}

export default StartOver;