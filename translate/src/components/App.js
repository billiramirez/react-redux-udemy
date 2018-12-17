import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';


class App extends React.Component{

    state = { language: 'eng' }
 
    onLanguageChange = (language) =>{
        this.setState({language});
    }

    render(){
        return (
            <div className="ui container">
                <div>Select Language:
                    <i onClick={() => this.onLanguageChange('eng')} className="flag us"/>
                    <i onClick={() => this.onLanguageChange('dut')} className="flag nl"/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;