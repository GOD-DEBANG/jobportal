import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true }, // Reference to Job model
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
    resume: { type: String, required: true }, // URL to the resume file
    coverLetter: { type: String, default: "" }, // Optional cover letter
    status: { 
        type: String, 
        enum: ["Applied", "Interviewing", "Offered", "Rejected"], 
        default: "Applied" 
    }, // Application status
    appliedAt: { type: Date, default: Date.now }, // Date when the application was submitted
    updatedAt: { type: Date, default: Date.now } // Date when the application was last updated
}, { timestamps: true });
export default mongoose.model("Application", applicationSchema);