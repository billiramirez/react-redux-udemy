import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


const Header = ()=> {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
               Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Stream
                </Link>
            </div>
        </div>
    );
};

export default withRouter(Header);