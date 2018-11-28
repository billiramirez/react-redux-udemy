import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID da6602740d647a74c8afc5fd38d805ffd222c6e2b8bff5d8d3aadf6cc76565f7'
    }
});