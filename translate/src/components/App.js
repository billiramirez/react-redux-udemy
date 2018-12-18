import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';



class App extends React.Component{

    render(){
        return (
            <LanguageStore>
            <div className="ui container">
                <LanguageSelector />
                <ColorContext.Provider value="primary">
                        <UserCreate/>
                </ColorContext.Provider>
            </div>
            </LanguageStore>
        );
    }
}

export default App;