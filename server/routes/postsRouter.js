import express from 'express';
import {
  getAllPostsHandler,
  getPostsHandler,
  createPostsHandler,
  updatePostsHandler,
  deletePostsHandler
} from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getAllPostsHandler);
router.get('/:id', getPostsHandler);
router.post('/', createPostsHandler);
router.put('/:id', updatePostsHandler);
router.delete('/:id', deletePostsHandler);

export default router;