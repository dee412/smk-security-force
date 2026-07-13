import nodemailer from 'nodemailer';

export const sendInquiryEmail = async (inquiryData) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP credentials (SMTP_USER/SMTP_PASS) are not set in environmental variables. Email not sent.');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SMK Security Force Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'smkinfo.blr@gmail.com',
      subject: `New Website Inquiry - ${inquiryData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #d4af37; padding-bottom: 8px; margin-top: 0;">New Website Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${inquiryData.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${inquiryData.companyName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${inquiryData.email}">${inquiryData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${inquiryData.phone}">${inquiryData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">City:</td>
              <td style="padding: 8px 0; color: #0f172a;">${inquiryData.city || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 8px 0; color: #d4af37; font-weight: bold;">${inquiryData.service}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #d4af37;">
            <strong style="color: #475569; display: block; margin-bottom: 8px;">Message:</strong>
            <p style="color: #0f172a; margin: 0; white-space: pre-wrap; line-height: 1.6;">${inquiryData.message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Inquiry email sent successfully.');
  } catch (error) {
    console.error('Error sending inquiry email:', error);
  }
};
