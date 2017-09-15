const axiosRetry = require('axios-retry');
const axios = require('axios');
const config = require('../../config');

const client = axios.create({
    baseURL: config.get('s13:api')
});

axiosRetry(client, {
    retries: config.get('s13:retries')
});

module.exports = client;