import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  resume: {
    type: String // URL or file path
  },
  status: {
    type: String,
    enum: ['applied', 'reviewing', 'interview', 'hired', 'rejected'],
    default: 'applied'
  },
  coverLetter: {
    type: String
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
});

export const Application = mongoose.model('Application', applicationSchema);
