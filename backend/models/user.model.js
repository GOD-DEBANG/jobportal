import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname: {String, required: true},
    email: {String, required: true, unique: true},
    password: {String, required: true},
    role: {String, default: "user"

    }, // user or admin
    profile: {
        bio: {String, default: ""},
        profilePicture: {String, default: ""},
        coverPicture: {String, default: ""},
        experience: {Array, default: []}, // Array of experience objects
        education: {Array, default: []}, // Array of education objects
        Skills: {Array, default: []}, // Array of skills
        company: {type: mongoose.Schema.Types.ObjectId, ref: "Company", default: null}, // Reference to Company model
    },
    resume: {String, default: ""}, // URL to resume file
    resumeFileName: {String, default: ""}, // Original file name of the resume
    
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
}, {timestamps: true});
export default mongoose.model("User", userSchema);