/**
 * 身份认证中间件
 * @param {object} options
 * @return {Function}
 */
export default (options) => {
    console.log('test middleware has been loaded');
    return (req, res, next) => {
        next();
    };
};
