import axios from 'axios';

/** creating a default axio config , so that it can be used over and over again */
const api = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
})

export default api;