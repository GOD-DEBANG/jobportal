import express from 'express';
import {
    postJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    searchJobs,
    smartJobSearch
} from '../controllers/job.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

// Job CRUD
router.post('/create', isAuthenticated, postJob);
router.get('/all', getAllJobs);
router.get('/search', searchJobs);
router.get('/:jobId', getJobById);
router.put('/:jobId', isAuthenticated, updateJob);
router.delete('/:jobId', isAuthenticated, deleteJob);

// AI-powered job recommendation/search
router.post('/smart-search', smartJobSearch);

export default router;
