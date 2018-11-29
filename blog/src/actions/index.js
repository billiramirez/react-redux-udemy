import jsonplaceholder from '../apis/jsonplaceholder';


// When we make use use of redux-thunk, we need to make sure of a function return a function
export const asyncFetchPost = () => async dispatch => {
        const response =  await jsonplaceholder.get('/posts');
        dispatch(fetchPost(response));
};


export const fetchPost = (response)=> {
    return {type: 'FETCH_POSTS', payload: response};
};