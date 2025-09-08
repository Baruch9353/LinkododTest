import express from 'express';
import {
  getAllPostsHandler,
  getPostsHandler,
  createPostsHandler,
  updatePostsHandler,
  deletePostsHandler
} from '../controllers/postsController.js';

const router = express.Router();

router.get('/posts', getAllPostsHandler);
router.get('/posts/:id', getPostsHandler);
router.post('/posts', createPostsHandler);
router.put('/posts/:id', updatePostsHandler);
router.delete('/posts/:id', deletePostsHandler);

export default router;