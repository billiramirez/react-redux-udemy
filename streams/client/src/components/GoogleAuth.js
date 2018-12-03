import React from 'react';


class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '338635997627-skiil2ge009gaf4819e6ruat54fkofdk.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render(){
        return (
            <div>
                GoogleAuth
            </div>
        );
    }
}

export default GoogleAuth;

