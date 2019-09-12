import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/api/api/users', function (req, res, next) {
    console.log('api2');
    res.send('1111111111111111111');
});
console.log('user route has been boot');

export default router;
