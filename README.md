# 🌿 GreenNest – Indoor Plant Care & Store SPA

GreenNest is a modern, elegant single-page web application designed for plant lovers who want to beautify their homes with healthy indoor plants. The platform allows users to explore indoor plants, learn care tips, purchase plants, and book expert consultations — all in a calm, nature-inspired interface.

🔗 **Live Website:** https://greennestshop.netlify.app/

## Description
GreenNest is a single-page web application built for indoor plant lovers who want to explore, care for, and purchase healthy indoor plants. The platform provides detailed plant information, plant care tips, and expert consultation booking in a clean, calming, and nature-inspired interface.
The application uses Firebase authentication to ensure secure user access and includes protected routes for plant details and user profile management. Plant data is dynamically loaded from a JSON file, maintaining smooth SPA navigation without page reloads. GreenNest focuses on responsive design, user-friendly interaction, and modern frontend best practices to create a pleasant digital experience for plant enthusiasts.


## ✨ Key Features

### 🌱 General Features
- Fully responsive design for mobile, tablet, and desktop
- Single Page Application (SPA) with smooth route navigation
- Minimalist and calming green-themed UI
- Navbar and Footer visible on all routes

---

### 🔐 Authentication & Security
- Firebase Authentication
- Email & Password Login
- Google Social Login
- Signup with password validation
- Forgot Password (Gmail redirect)
- Protected Routes for plant details and profile page
- User redirected to intended page after login

---


### 🌿 Plant Features
- Plant data loaded from `plants.json`
- Each plant includes:
  - Name, Category, Price, Rating
  - Stock Availability
  - Care Level
  - Provider Name
  - Description & Image
- “View Details” button for each plant

---

### 🔒 Plant Details Page (Protected)
- Accessible only for logged-in users
- Redirects unauthenticated users to Login
- Shows full plant details
- Consultation booking form:
  - Name
  - Email
- Success toast on booking
- Form resets after submission

---

### 👤 My Profile Page
- Displays user:
  - Name
  - Email
  - Photo
- Update Profile feature:
  - Update display name
  - Update photo URL
- Uses Firebase `updateProfile()` for real-time updates


## 🧰 Technologies Used

### 🖥️ Frontend
- React.js
- React Router DOM
- Tailwind CSS
- DaisyUI
- Swiper.js / Framer Motion

### 🔥 Authentication & Hosting
- Firebase Authentication
- Firebase Hosting

### 📦 Packages & Libraries
- react-router
- firebase
- react-icons
- react-toastify
- swiper
- framer-motion
- tailwind
- daisy ui
- swiper js

---



