import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a 2222222222222222');
});
console.log('page route has been boot');

export default router;
