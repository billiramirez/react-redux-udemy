import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    static contextType = LanguageContext;

    render(){
        const txt = this.context === 'eng' ? 'Submit' : 'Voorleggen';
        return (
            <button className="ui button primary">{txt}</button>
        )
    }
}

export default Button;