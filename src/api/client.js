const axios = require('axios');
const config = require('../../config');
const logger = require('../logger');

const client = axios.create({
    baseURL: config.get('s13:api'),
    timeout: config.get('s13:timeout')
});

client.interceptors.request.use(request => {
    logger.info('Starting Request');
    return request;
});

client.interceptors.response.use(response => {
    logger.info('Response:' + response);
    return response;
});

module.exports = client;