import axios from 'axios';

const instance = axios.create({
    // base URL for the database
    baseURL: 'https://burger-builder-d41d7.firebaseio.com/'
});

export default instance;