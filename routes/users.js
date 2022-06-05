var express = require('express');
var router = express.Router();

const users = require('../data/users.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  const u = [...users]
  let {skip,take}=req.query
  skip=skip|| 0
  take=take|| 10
  
  res.send(u.splice(skip, take));

});
/* GET user by id */
router.get('/:id', function(req, res, next) {
  const user = users.find((u)=> u.id === parseInt(req.params.id))
  const r = user ? user : 'not found'
  res.send(r);
})
/* delete user by id */
router.delete('/:id' , (req,res)=> {
  console.log (req.params.id);
  res.send('the user has been deleted');
})
/* post user */
router.post ('/' , (req,res) => {
  console.log(req.body)
  res.send(req.body)
})
/* patch user */
router.patch('/' , (req,res) => {
  console.log(req.body)
  res.send(req.body)
})

module.exports = router;
