import axios from 'axios';

const KEY = 'AIzaSyCc0l2z_tdC6PUft2654uFM-wgTE5yOC7c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})
