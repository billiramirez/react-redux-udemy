import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends React.Component{

    static contextType = LanguageContext;

    render(){
        
        return(
            <div>Select Language:
                    <i onClick={() => this.context.onLanguageChange('eng')} className="flag us"/>
                    <i onClick={() => this.context.onLanguageChange('dut')} className="flag nl"/>
            </div>
        );
    }
}

export default LanguageSelector;