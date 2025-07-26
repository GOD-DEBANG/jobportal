import express from 'express';
import {
  applyToJob,
  getUserApplications,
  getAllApplications,
  updateApplicationStatus,
  smartJobSearch
} from '../conroller/application.controller.js';
import { isAuthenticated, isAdmin } from '../middleware/isAuthenticated.js';

const router = express.Router();

// User applies to job
router.post('/apply/:jobId', isAuthenticated, applyToJob);

// User gets their applications
router.get('/my-applications', isAuthenticated, getUserApplications);

// Admin gets all applications
router.get('/all', isAuthenticated, isAdmin, getAllApplications);

// Admin updates application status
router.put('/status/:applicationId', isAuthenticated, isAdmin, updateApplicationStatus);

// AI-powered job search
router.post('/ai-search', isAuthenticated, smartJobSearch);

export default router;
