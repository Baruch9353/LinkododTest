import express from 'express';
import {
    getAllUsersHandler,
    getUsersHandler,
    createUsersHandler
} from '../controllers/usersController.js'

const router = express.Router();

router.get('/', getAllUsersHandler);
router.get('/:email/:password', getUsersHandler);
router.post('/', createUsersHandler);

export default router;
