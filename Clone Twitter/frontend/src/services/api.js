/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;