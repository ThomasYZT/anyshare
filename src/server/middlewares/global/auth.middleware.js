import jwt from '../../lib/jwt';
/**
 * 身份认证中间件
 * @param {object} options
 * @return {Function}
 */
export default (options) => {
    console.log('auth middleware has been loaded');
    let token = jwt.generateToken({
        name : 'yzt',
        password : '123456'
    });
    setTimeout(() => {
        let userInfo = jwt.verifyToken(token, {
            name : 'yzt',
            password : '12'
        });
        console.log(userInfo);
    }, 1000);

    return (req, res, next) => {
        next();
    };
};
