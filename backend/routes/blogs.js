const express = require('express');
const router = express.Router();
const { getAllBlogs, getBlogById, createBlog, deleteBlogById, createUser , Login} = require('../controllers/blogs.js');

router.get("/",getAllBlogs)
router.get("/:id",getBlogById)
router.post("/",createBlog)
router.delete("/:id",deleteBlogById)
router.post("/user",createUser)
router.post("/Login",Login)
module.exports = router;
