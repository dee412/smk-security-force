import express from 'express';
import Inquiry from '../models/Inquiry.js';
import { sendInquiryEmail } from '../services/emailService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { fullName, companyName, email, phone, city, service, message } = req.body;

    if (!fullName || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Save to DB
    let inquiry = null;
    try {
      inquiry = await Inquiry.create({
        fullName,
        companyName,
        email,
        phone,
        city,
        service,
        message
      });
      console.log('Inquiry saved to database.');
    } catch (dbError) {
      console.warn('Database save failed (possibly MongoDB is offline):', dbError.message);
      // Fallback object to proceed with email notification
      inquiry = { fullName, companyName, email, phone, city, service, message };
    }

    // Send Email notification
    await sendInquiryEmail(inquiry);

    res.status(201).json({ success: true, data: inquiry });
  } catch (error) {
    console.error('Inquiry endpoint error:', error);
    res.status(500).json({ error: 'Server error processing inquiry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ error: 'Server error retrieving inquiries' });
  }
});

export default router;
