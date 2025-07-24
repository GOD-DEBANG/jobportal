import mongoose from "mongoose";
const jobsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    employmentType: { type: String, enum: ["Full-time", "Part-time", "Contract", "Internship"], required: true },
    requirements: { type: String, required: true },
    responsibilities: { type: String, required: true },
    qualifications: { type: String, required: true },
    skills: { type: [String], default: [] }, // Array of skills required for the job
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Array of User IDs who applied for the job
    NoofApplicants: { type: Number, default: 0 }, // Count of applicants
    createdBy:{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model for the creator
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
export default mongoose.model("Job", jobsSchema);