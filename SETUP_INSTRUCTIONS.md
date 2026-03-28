# Contact Form Setup Instructions

## 1. Install Axios

First, install the axios package by running this command in your terminal:

```bash
npm install axios
```

## 2. Create API Endpoint

You need to create the API endpoint file. Create a new folder and file:

**File path:** `api/contact.js`

Copy the following code into `api/contact.js`:

```javascript
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS HEADERS - Allow all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Accept form fields
  const {
    name,
    phone,
    city,
    contactMethod
  } = req.body;

  // Basic validation
  if (!name || !phone || !contactMethod) {
    return res.status(400).json({ 
      error: "Missing required fields",
      details: "Name, phone, and contact method are required"
    });
  }

  // Validate phone number format (10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ 
      error: "Invalid phone number",
      details: "Phone number must be 10 digits"
    });
  }

  // Contact method display
  const contactMethodDisplay = contactMethod === 'call' ? '📞 Phone Call' : '💬 WhatsApp';

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ambhore199@gmail.com",
        pass: "nyhk ifjh pbke uhpm",
      }
    });

    await transporter.sendMail({
      from: \`"WILD CONSULTATION REQUEST" <ambhore199@gmail.com>\`,
      to: "ambhore199@gmail.com, info@admarktech.in",
      subject: \`🌿 New Consultation Request - \${name} - \${contactMethodDisplay}\`,
      html: \`
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; background-color: #050505; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #d97706 0%, #f97316 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🌿 New Private Consultation</h1>
            <p style="color: #fef3c7; margin: 10px 0 0 0; font-size: 14px; font-weight: bold;">WILD CAPSULE & POWER OIL</p>
          </div>
          
          <div style="background-color: #0a0a0a; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #404040; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
            
            <h2 style="color: #fbbf24; border-bottom: 2px solid #404040; padding-bottom: 10px; margin-bottom: 25px;">Customer Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0; color: #a3a3a3; font-size: 14px; font-weight: 600;">FULL NAME</p>
              <p style="margin: 5px 0; color: #e5e5e5; font-size: 18px; font-weight: 500;">\${name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0; color: #a3a3a3; font-size: 14px; font-weight: 600;">PHONE NUMBER</p>
              <p style="margin: 5px 0; color: #e5e5e5; font-size: 18px;">
                <a href="tel:+91\${phone}" style="color: #fbbf24; text-decoration: none; font-weight: 600;">+91 \${phone}</a>
              </p>
            </div>
            
            \${city ? \`
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0; color: #a3a3a3; font-size: 14px; font-weight: 600;">📍 CITY</p>
              <p style="margin: 5px 0; color: #e5e5e5; font-size: 16px; line-height: 1.5;">\${city}</p>
            </div>
            \` : ''}
            
            <div style="background: linear-gradient(135deg, #78350f 0%, #92400e 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #fbbf24;">
              <h3 style="color: #fbbf24; margin: 0 0 15px 0; font-size: 18px;">📞 Preferred Contact Method</h3>
              
              <div style="background: #0a0a0a; padding: 20px; border-radius: 8px; border: 1px solid #404040;">
                <p style="margin: 0; color: #fbbf24; font-size: 20px; font-weight: bold;">\${contactMethodDisplay}</p>
                \${contactMethod === 'whatsapp' ? \`
                <div style="margin-top: 15px;">
                  <a href="https://wa.me/91\${phone}" 
                     style="display: inline-block; background-color: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                    💬 Send WhatsApp Message
                  </a>
                </div>
                \` : \`
                <div style="margin-top: 15px;">
                  <a href="tel:+91\${phone}" 
                     style="display: inline-block; background-color: #fbbf24; color: #1c1917; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                    📞 Call Now
                  </a>
                </div>
                \`}
              </div>
            </div>
            
            <div style="background-color: #1e3a1a; border-left: 4px solid #16a34a; padding: 15px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #86efac; font-size: 14px; font-weight: bold;">✅ Action Required: Contact customer for private consultation via \${contactMethod === 'call' ? 'phone call' : 'WhatsApp'}</p>
            </div>

            <div style="background-color: #1e293b; border-left: 4px solid #60a5fa; padding: 15px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #93c5fd; font-size: 13px; font-weight: 600;">🔒 PRIVACY NOTE: This is a confidential consultation request. Handle with discretion.</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #404040; text-align: center;">
              <p style="color: #a3a3a3; font-size: 14px; margin: 0;">
                This request was submitted from the Wild Capsule & Power Oil consultation form
              </p>
              <p style="color: #737373; font-size: 12px; margin: 10px 0 0 0;">
                \${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
            </div>
          </div>
        </div>
      \`,
      text: \`
🌿 NEW PRIVATE CONSULTATION REQUEST - WILD

Customer Details:
-----------------
Full Name: \${name}
Phone: +91 \${phone}\${city ? \`
City: \${city}\` : ''}

Preferred Contact Method:
-------------------------
\${contactMethodDisplay}

✅ Action Required: Contact customer for private consultation via \${contactMethod === 'call' ? 'phone call' : 'WhatsApp'}

🔒 PRIVACY NOTE: This is a confidential consultation request. Handle with discretion.

---
Submitted from Wild Capsule & Power Oil consultation form
\${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      \`
    });

    return res.status(200).json({ 
      success: true, 
      message: "Your request has been submitted successfully! Our team will contact you shortly for a private consultation." 
    });

  } catch (error) {
    console.error("CONSULTATION REQUEST EMAIL ERROR:", error);
    return res.status(500).json({
      error: "Failed to submit consultation request",
      details: error.message
    });
  }
}
```

## 3. Install Nodemailer (for the API)

If you're using a serverless platform (like Vercel or Netlify), install nodemailer:

```bash
npm install nodemailer
```

## 4. Configure API Endpoint URL

In `src/app/App.tsx`, update the API endpoint URL on line ~206:

```javascript
const response = await axios.post('/api/contact', formData);
```

Replace `/api/contact` with your actual API endpoint URL. For example:
- Local: `http://localhost:3000/api/contact`
- Production: `https://yourdomain.com/api/contact`

## 5. Environment Variables (Recommended)

For security, move your email credentials to environment variables:

Create a `.env` file in your project root:

```env
EMAIL_USER=ambhore199@gmail.com
EMAIL_PASS=nyhk ifjh pbke uhpm
EMAIL_TO=ambhore199@gmail.com,info@admarktech.in
```

Then update the API file to use:

```javascript
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
}
```

## What's Been Implemented

✅ **Contact Form with Axios Integration**
- Form submits data using axios POST request
- Loading state with spinner during submission
- Error handling with user-friendly messages
- Form validation (10-digit phone number required)

✅ **Thank You Modal**
- Beautiful success modal after form submission
- Green checkmark icon
- Reassuring privacy message
- Close button to dismiss

✅ **Loading States**
- Submit button shows spinner during submission
- All form fields disabled during submission
- Prevents multiple submissions

✅ **Error Handling**
- Displays error messages if submission fails
- User-friendly error text
- Console logging for debugging

## Testing

To test the form:

1. Fill out all required fields (name and phone)
2. Select preferred contact method
3. Click "Request Call Now"
4. You should see a loading spinner, then the thank you modal
5. Check your email for the consultation request

## Notes

- The phone input requires exactly 10 digits
- City field is optional
- Default contact method is WhatsApp
- Form resets after successful submission
