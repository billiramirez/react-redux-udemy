import React from 'react';
import {connect} from 'react-redux';
import { asyncFetchPosts } from '../actions';


class PostList extends React.Component{

    componentDidMount(){
        this.props.asyncFetchPosts();
    }

    render(){
        console.log(this.props.posts);
        return (
            <div>
                PostList
            </div>
        );
    }
};

const mapStateToProps = (state)=> {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {asyncFetchPosts})(PostList);