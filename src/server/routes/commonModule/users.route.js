import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource11111111111111');
});
console.log('user route has been boot')

export default router;
