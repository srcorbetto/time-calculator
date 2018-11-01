import React from 'react';
import SideScreen from '../SideScreen/SideScreen';
import TotalScreen from '../TotalScreen/TotalScreen';

import './ScreenWrapper.css';

const ScreenWrapper = props => {
    return (
        <div className="ScreenWrapper row">
            <div className="sideScreenHolder col">
                <SideScreen styleClass="DevScreen"
                            hours={props.devHours}
                            headline="Dev Hours"
                            animationClass={props.animationClassDev}
                />
                <SideScreen styleClass="AdminScreen"
                            hours={props.adminHours}
                            headline="Admin Hours"
                            animationClass={props.animationClassAdmin}
                />
            </div>
            <TotalScreen hours={props.totalHours}
                         headline="Total Hours"
            />
        </div>
    )
}

export default ScreenWrapper;