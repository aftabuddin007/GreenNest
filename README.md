# 🌿 GreenNest – Indoor Plant Care & Store SPA

GreenNest is a modern, elegant single-page web application designed for plant lovers who want to beautify their homes with healthy indoor plants. The platform allows users to explore indoor plants, learn care tips, purchase plants, and book expert consultations — all in a calm, nature-inspired interface.

🔗 **Live Website:** https://greennestshop.netlify.app/


---

## 🎯 Project Purpose

The main goal of GreenNest is to build a responsive and visually pleasing plant care and e-commerce platform using modern frontend technologies. The application ensures smooth navigation, secure authentication, and protected content while maintaining SPA behavior.

---

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

### 🏠 Home Page Sections
- **Hero Section:** Animated slider using Swiper / Framer Motion
- **Top Rated Indoor Plants:** Data fetched from JSON
- **Plant Care Tips:** Watering, sunlight, and fertilizing tips
- **Meet Our Green Experts:** Expert profiles with specialization
- **Extra Section:** Eco Decor Ideas / Plant of the Week

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

---

## 🧪 Extra Functionalities
- Show/Hide password toggle
- Real-time error handling with toast messages
- Password validation:
  - Minimum 6 characters
  - At least one uppercase letter
  - At least one lowercase letter
- No email verification (as per assignment instruction)

---

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
- react-router-dom
- firebase
- react-icons
- react-toastify
- swiper
- framer-motion

---

## 📁 Project Structure

