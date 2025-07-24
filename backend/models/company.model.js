import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    logo: { type: String, default: "" }, // URL to company logo
    website: { type: String, default: "" }, // Company website URL
    location: { type: String, default: "" }, // Company location
    industry: { type: String, default: "" }, // Industry type
    size: { type: String, default: "" }, // Company size (e.g., small, medium, large)
    founded: { type: Date, default: Date.now }, // Date when the company was founded
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Array of User IDs who are employees
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
export default mongoose.model("Company", companySchema);