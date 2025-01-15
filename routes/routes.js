import express from 'express'
import { generateToken, helloWorld, postBodyResponse } from '../controllers/controller.js';

const router = express.Router();

router.get('/hello', helloWorld);
router.post('/body', postBodyResponse);
router.get('/token', generateToken);

export default router;