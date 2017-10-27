const R = require('ramda');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.body = { message: error.message || 'Technical error' };
        ctx.status = R.path(['response', 'status'], error) || 500;
    }
};