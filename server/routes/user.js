
const express = require("express");
const User = require('../models/user'); 
const router = express.Router();


router
  .post('/login', async (req, res) => {
    try {
      const user = await User.userLogin(req.body.username, req.body.password);
      res.send({...user, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const user = await User.userRegister(req.body.username, req.body.password, req.body.email);
      const { password, ...userData } = user;
      res.send({userData});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const user = await User.updatePassword(req.body._id, req.body.password);
      res.send({...user, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await User.deleteUser(req.body._id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })


module.exports = router;