
import { Company } from '../models/company.model.js';
import axios from 'axios';

/**
 * Create a new company
 */
export const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json({ success: true, data: company });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get all companies with optional industry filter
 */
export const getAllCompanies = async (req, res) => {
    try {
        const { industry } = req.query;
        const filter = industry ? { industry } : {};
        const companies = await Company.find(filter).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: companies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Search companies by name (case-insensitive)
 */
export const searchCompaniesByName = async (req, res) => {
    try {
        const { name } = req.query;
        const companies = await Company.find({
            name: { $regex: name, $options: 'i' }
        });
        res.status(200).json({ success: true, data: companies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Filter companies by location
 */
export const getCompaniesByLocation = async (req, res) => {
    try {
        const { location } = req.query;
        const companies = await Company.find({ location: { $regex: location, $options: 'i' } });
        res.status(200).json({ success: true, data: companies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get a specific company by ID
 */
export const getCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.companyId);
        if (!company) return res.status(404).json({ success: false, message: "Company not found" });
        res.status(200).json({ success: true, data: company });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Update a company
 */
export const updateCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, { new: true });
        if (!company) return res.status(404).json({ success: false, message: "Company not found" });
        res.status(200).json({ success: true, data: company });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Delete a company
 */
export const deleteCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.companyId);
        if (!company) return res.status(404).json({ success: false, message: "Company not found" });
        res.status(200).json({ success: true, message: "Company deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * AI-enhanced smart company search
 * Uses external AI API to suggest companies based on user intent
 */
export const aiEnhancedCompanySearch = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) return res.status(400).json({ success: false, message: "Query is required" });

        const response = await axios.post(process.env.AI_COMPANY_SEARCH_URL, {
            query
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.AI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const results = response.data?.results || [];
        res.status(200).json({ success: true, message: "AI search successful", data: results });

    } catch (error) {
        console.error("AI search error:", error.message);
        res.status(500).json({ success: false, message: "AI search failed" });
    }
};
