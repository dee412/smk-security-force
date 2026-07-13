import express from 'express';
// import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/apply', (req, res) => res.json({ message: 'Apply for career endpoint' }));
router.get('/', (req, res) => res.json({ message: 'Get all applications endpoint' }));

export default router;
