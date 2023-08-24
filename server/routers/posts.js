import express from "express";
import { getPosts, createPost, updatePost } from '../controllers/PostController.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/update', updatePost);

export default router;