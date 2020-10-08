import axios from 'axios';

export default APIObject(method, url, data) {
    return axios({
    method: method,
    url: url,
    data: data
    });
}
