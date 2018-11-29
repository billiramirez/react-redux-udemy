import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const buttonText = "Click on me!"
    const labelText = "Enter name:";
    return (
        <div>
            <label className="label" htmlForc="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText}</button>
        </div>
    )
}


ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);