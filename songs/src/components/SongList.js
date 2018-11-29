import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component{
    render(){
        
        return (
            <div>SongList {this.props.songs.length}</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    };
    
}

export default connect(mapStateToProps)(SongList);