const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let user = req.users.filter(function(user) {
      return user.username === req.params.name;
    });
    if(!user.length) {
      user = {error: 'User not found'}
      return res.send(user);
    }
    res.send(user);
  })
module.exports = router