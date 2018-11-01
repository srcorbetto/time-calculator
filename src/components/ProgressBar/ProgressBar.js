import React from 'react';

import './ProgressBar.css';

const ProgressBar = props => {
    return (
        <div className="row pt-3 pb-3">
            <div className="col">
                <div className="ProgressBar">
                    <div className={'myProgress ' + props.progressLevel}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;