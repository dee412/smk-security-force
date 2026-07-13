import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  section: { type: String, required: true, unique: true }, // e.g., 'Hero', 'About', 'Footer'
  data: { type: mongoose.Schema.Types.Mixed, required: true } // Flexible JSON for different sections
}, { timestamps: true });

export default mongoose.model('Content', contentSchema);
