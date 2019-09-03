/**
 * 身份认证中间件
 * @param {object} options
 * @return {Function}
 */
export default (options) => {
    console.log('auth middleware has been loaded');
    return (req, res, next) => {

        next();
    };
};
