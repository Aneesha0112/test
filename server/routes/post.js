
const express = require("express");
const Post = require('../models/post'); 
const router = express.Router();


router
  .post('/post', async (req, res) => {
        try {
            const post = await Post.createPost(req.body.user, req.body.content,req.body.time,req.body.location);
            res.send({post});
          } catch(error) {
            res.status(401).send({ message: error.message });
          }  
  })
  

  .post('/read', async (req, res) => {
    try {
      const post = await Post.readPost(req.body._id);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })
  
  .put('/update', async (req, res) => {
    try {
      const post = await Post.updatePost(req.body._id, req.body.content, req.body.time);
      res.send({post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Post.deletePost(req.body._id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })


module.exports = router;