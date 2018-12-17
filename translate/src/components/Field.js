import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext;

    render(){
        const txt = this.context === 'eng' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{txt}</label>
                <input/>
            </div>
        );
    }
}

export default Field;