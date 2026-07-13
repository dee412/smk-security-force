import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  coverLetter: { type: String },
  status: { type: String, enum: ['Pending', 'Shortlisted', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
