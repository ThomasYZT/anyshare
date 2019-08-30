let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.end('hello! express1111111');
});

module.exports = router;
