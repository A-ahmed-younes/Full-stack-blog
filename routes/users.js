var express = require('express');
var router = express.Router();

const users = require('../data/users.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  const {skip, take} = req.query
  const u = [...users]

  

  res.send(u.splice(skip, take));

});

router.get('/:id', function(req, res, next) {
  const user = users.find((u)=> u.id === parseInt(req.params.id))
  const r = user ? user : 'not found'
  res.send(r);
});

module.exports = router;
