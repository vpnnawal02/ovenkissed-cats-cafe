# 🐾 Ovenkissed Cats Café  
A modern, aesthetic, and fully responsive café website built using **React + Vite**.  
Inspired by cozy cat cafés, this project focuses on clean design, smooth interactions, and fast performance.

---

## 🚀 Live Demo  
Full App: https://ovenkissed-cats-cafe.onrender.com (Waiting time) <br>
Frontend: https://frabjous-elf-35e678.netlify.app (No waiting time)

---

## 📌 Features  
- 🎨 Beautiful, responsive UI  
- ⚡ Fast performance with React + Vite  
- 🐱 Cat-themed café aesthetic  
- 🧭 Smooth navigation  
- 📱 Fully mobile-friendly  
- 🍰 Menu sections (cakes, bakery items, beverages, etc.)  
- ✨ Reusable, clean component structure  
- 🚀 Optimized build for production  

---

## 🛠️ Tech Stack  

### **Frontend**
- React  
- Vite  
- Tailwind CSS / Custom CSS  
- React Router

### **Backend**
- FastAPI
- Pydantic
- Python 3.13
- CORS Middleware

### Deployment
- **Frontend:** Netlify  
- **Backend:** Render
---

### Email Service
- **Resend** (Email API – Render compatible)

## 📂 Project Structure  
ovenkissed-cats-cafe/
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── index.html
│ └── package.json
│
├── backend/
│ ├── main.py
│ ├── requirements.txt
│ └── .env (not committed)
│
└── README.md
---

## 🧩 Installation & Setup

### Clone the project

git clone https://github.com/vpnnawal02/ovenkissed-cats-cafe
cd ovenkissed-cats-cafe/frontend

## Install dependencies
npm install

## Start development server
npm run dev

## Build for production
npm run build

## Preview production build
npm run preview

## Environment variables (.env)
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=Ovenkissed <onboarding@resend.dev>
TO_EMAIL=your_email@gmail.com

## Email Handling (Resend)
- Email is sent automatically when a booking is submitted
- Uses Resend Email API (no SMTP, Render-safe)
- HTML formatted email for admin notification

### Known Limitations
- Bookings are not yet stored in a database
- Email confirmation is sent only to admin (not customer)

### Future Improvements
- 📦 Database integration (PostgreSQL / MongoDB)
- 👤 Customer confirmation emails
- 🛠️ Admin dashboard
- 🔐 Rate limiting & spam protection
- 📊 Booking analytics

# 🧑‍💻 Author
Vipin Nawal
Full-Stack Developer
📧 vn.nawal02@gmail.com

# ⭐ Support
If you found this project helpful, please consider:
⭐ Starring the repository
🔄 Sharing it
💬 Giving feedback
