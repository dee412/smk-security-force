import express from 'express';
// import { login, logout, getMe } from '../controllers/authController.js';
// import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', (req, res) => res.json({ message: 'Login endpoint' }));
router.get('/logout', (req, res) => res.json({ message: 'Logout endpoint' }));
router.get('/me', (req, res) => res.json({ message: 'Get Me endpoint' }));

export default router;
