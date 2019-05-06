var express = require('express');
var router = express.Router();

/* Health Check */
router.get('/health', function(req, res, next) {
  res.json({
      status: 'success',
      message: 'Star wars service is running. Hooray!!!'
  });
});

module.exports = router;