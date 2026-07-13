import express from 'express';
// import { protect, authorize } from '../middleware/auth.js';
// import { authorize } from '../middleware/admin.js';

const router = express.Router();

router.post('/', (req, res) => res.json({ message: 'Create inquiry endpoint' }));
router.get('/', (req, res) => res.json({ message: 'Get all inquiries endpoint' }));

export default router;
