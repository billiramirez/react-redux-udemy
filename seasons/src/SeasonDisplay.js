import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Bur it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = ({lat})=> {
    const season = getSeason(lat, new Date().getMonth());
    
    const {text, iconName} = seasonConfig[season];



    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left massive icon`}/>
            <h1>
                {text}
            </h1>
            <i className={`${iconName} icon-right massive icon`}/>            
        </div>
    )
};

export default SeasonDisplay;