import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/api/users', function (req, res, next) {
    console.log('api2');
    res.send('1111111111111111111');
});

export default router;
