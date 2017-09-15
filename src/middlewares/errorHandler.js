const _ = require('lodash');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.body = { message: _.get(error, 'message', 'Technical error') };
        ctx.status = _.get(error, 'response.status', 500);
    }
};