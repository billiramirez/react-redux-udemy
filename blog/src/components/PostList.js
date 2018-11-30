import React from 'react';
import {connect} from 'react-redux';
import { asyncFetchPosts } from '../actions';

import UserHeader from './UserHeader';


class PostList extends React.Component{

    componentDidMount(){
        this.props.asyncFetchPosts();
    }

    renderList(){
        return this.props.posts.map( p => {
            return (
                <div className="item" key={p.id}>
                    <i className="larg middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{p.title}</h2>
                            <p>{p.body}</p>
                        </div>
                        <UserHeader userId={p.userId}/>
                    </div>
                </div>
            )
        })
    }

    render(){
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
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