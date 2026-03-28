# 🚀 QUICK SETUP GUIDE

## You're almost there! Follow these 4 simple steps:

---

## STEP 1: Create Directories & Copy Files

Run these commands in your terminal (in the project folder):

```bash
node create-dirs.js
node copy-files.js
npm install react-router-dom
```

This will:
- ✓ Create all necessary directories
- ✓ Copy all component files from session folder
- ✓ Install react-router-dom

---

## STEP 2: Update main.tsx

**Backup your current main.tsx first!**

Then replace the content of `src/main.tsx` with this:

```typescript
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import { AuthProvider } from "./components/auth/AuthContext.tsx";
import Login from "./components/auth/Login.tsx";
import AdminPanel from "./components/admin/AdminPanel.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
```

---

## STEP 3: Update App.tsx

Open `src/app/App.tsx` and make these changes:

### 3A. Update Imports (at the top)

**ADD these lines:**
```typescript
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
```

**REMOVE this line:**
```typescript
import axios from 'axios';  // DELETE THIS
```

### 3B. Update handleSubmit Function

Find the `handleSubmit` function in the `ContactForm` component (around line 154).

**REPLACE this code:**
```typescript
try {
    // Replace with your actual API endpoint URL
    const response = await axios.post('https://shreepackways-smtp.vercel.app/api/contact-consultation', formData);
    
    if (response.data.success) {
        setShowThankYou(true);
        // Reset form
        setFormData({
            name: '',
            phone: '',
            city: '',
            contactMethod: 'whatsapp'
        });
    }
} catch (err: any) {
    setError(err.response?.data?.details || 'Failed to submit. Please try again.');
    console.error('Form submission error:', err);
}
```

**WITH this code:**
```typescript
try {
    // Add lead to Firestore
    await addDoc(collection(db, 'leads'), {
        ...formData,
        timestamp: serverTimestamp(),
    });
    
    setShowThankYou(true);
    // Reset form
    setFormData({
        name: '',
        phone: '',
        city: '',
        contactMethod: 'whatsapp'
    });
} catch (err: any) {
    setError('Failed to submit. Please try again.');
    console.error('Form submission error:', err);
}
```

---

## STEP 4: Set Up Firebase

### 4A. Firestore Security Rules
1. Go to https://console.firebase.google.com/
2. Select "ayurvedic-leads"
3. Click "Firestore Database" → "Rules"
4. Paste this and click "Publish":

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 4B. Create Admin User
1. In Firebase Console → "Authentication" → "Users"
2. Click "Add user"
3. Enter email: `admin@example.com`
4. Enter password: (choose a strong password)
5. Click "Add user"

---

## STEP 5: Test!

```bash
npm run dev
```

Then visit:
- ✅ **Landing Page:** http://localhost:5173/
- ✅ **Admin Login:** http://localhost:5173/admin/login
- ✅ **Dashboard:** http://localhost:5173/admin/dashboard

---

## ✅ CHECKLIST

- [ ] Run `node create-dirs.js`
- [ ] Run `node copy-files.js`
- [ ] Run `npm install react-router-dom`
- [ ] Update `main.tsx`
- [ ] Update `App.tsx` (add imports + update handleSubmit)
- [ ] Set Firestore security rules
- [ ] Create admin user
- [ ] Test contact form
- [ ] Test admin login
- [ ] Test dashboard

---

## 🎯 DONE!

You should now have:
- ✓ Contact form saving to Firebase
- ✓ Admin login at /admin/login
- ✓ Dashboard at /admin/dashboard

If you run into any issues, let me know!
