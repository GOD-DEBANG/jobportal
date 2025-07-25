import express from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
  updateProfile,
  analyzeResume
} from '../controllers/user.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

/**
 * @route   POST /api/users/register
 * @desc    Register a new user
 */
router.post('/register', registerUser);

/**
 * @route   POST /api/users/login
 * @desc    Login user and return JWT token
 */
router.post('/login', loginUser);

/**
 * @route   POST /api/users/logout
 * @desc    Clear token and logout
 */
router.post('/logout', logoutUser);

/**
 * @route   PUT /api/users/update/:userId
 * @desc    Update user profile
 */
router.put('/update/:userId', isAuthenticated, updateProfile);

/**
 * @route   GET /api/users/analyze/:userId
 * @desc    Analyze resume and return AI-based tags and suggestions
 */
router.get('/analyze/:userId', isAuthenticated, analyzeResume);

export default router;
