import axios from 'axios';

const prod = {
    url: 'http://it2810-75.idi.ntnu.no:3000',
};
const dev = {
    url: 'http://127.0.0.1:8000',
    // url: 'http://localhost:8000',
};

export const config = prod;

export default axios.create({baseURL: config.url});
