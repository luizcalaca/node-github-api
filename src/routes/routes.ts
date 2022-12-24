import { Router } from 'express';
import GithubController from '../controllers/GithubController';

const router = Router();
const controller = new GithubController();

router.get('/users', controller.getAllUsers);

export default router;
