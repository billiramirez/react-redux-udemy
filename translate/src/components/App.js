import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';



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
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;