import mongoose from 'mongoose';

const seoSchema = new mongoose.Schema({
  page: { type: String, required: true, unique: true }, // e.g., 'Home', 'Services'
  title: { type: String, required: true },
  description: { type: String },
  keywords: [{ type: String }],
  ogImageUrl: { type: String }
}, { timestamps: true });

export default mongoose.model('SEO', seoSchema);
