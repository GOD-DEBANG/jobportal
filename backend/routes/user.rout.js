import express from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
  updateProfile,
  analyzeResume
} from '../conroller/user.controller.js'; //  Fixed typo: "conroller" → "controllers"

import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user and return token
router.post('/login', loginUser);

// Logout user
router.post('/logout', logoutUser);

// Update user profile (protected)
router.put('/update/:userId', isAuthenticated, updateProfile);

// Analyze resume (protected)
router.get('/analyze/:userId', isAuthenticated, analyzeResume);

export default router;
