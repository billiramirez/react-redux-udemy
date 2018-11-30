import jsonplaceholder from '../apis/jsonplaceholder';

// When we make use use of redux-thunk, we need to make sure of a function return a function
export const asyncFetchPosts = () => async dispatch => {
        const response =  await jsonplaceholder.get('/posts');
        dispatch(fetchPosts(response));
};


export const fetchPosts = (response)=> {
    return {type: 'FETCH_POSTS', payload: response.data};
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}; 