const express = require("express");
const Post = require("../Models/postMessages");
const { getAllPosts, createPost, updatePost } = require('../Controllers/posts.js');
const router = express.Router();


router.get("/allPosts", getAllPosts);
router.post("/post", createPost);
router.post("/post/:id", updatePost)

module.exports = router;
