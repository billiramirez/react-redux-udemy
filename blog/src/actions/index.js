import jsonplaceholder from '../apis/jsonplaceholder';
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) =>{
    await dispatch(asyncFetchPosts());


    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id =>  dispatch(fetchUser(id)));

    /**This is another way to write the code above, with lodash library */

    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id =>  dispatch(fetchUser(id)))
    //     .value();


};


// When we make use use of redux-thunk, we need to make sure of a function return a function
export const asyncFetchPosts = () => async dispatch => {
        const response =  await jsonplaceholder.get('/posts');
        dispatch(fetchPosts(response));
};


export const fetchPosts = (response)=> {
    return {type: 'FETCH_POSTS', payload: response.data};
};


export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};
 



// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
 
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });