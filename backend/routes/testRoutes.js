import express from 'express';
import { addDummyTest, getAllTests } from '../controllers/exampleController.js';

const router = express.Router();

router.post('/add-dummy', addDummyTest);
router.get('/all', getAllTests);

export default router;
