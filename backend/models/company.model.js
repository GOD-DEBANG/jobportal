import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true
    },
    industry: {
        type: String,
        required: true,
        enum: ['IT', 'Finance', 'Healthcare', 'Education', 'Marketing', 'Other']
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    website: {
        type: String
    },
    description: {
        type: String
    },
    tags: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Company = mongoose.model('Company', companySchema);
