import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPost = () => {

    const promise =  jsonplaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};