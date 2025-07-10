<!-- Project Logo and Title -->
<p align="center">
  <img src="https://img.icons8.com/ios-filled/100/student-male.png" width="80"/>
</p>

<h1 align="center">Student Resource Portal 📚</h1>

<p align="center">
  A full-stack MERN application to upload, manage, and download academic resources — built for CSE students.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/Express.js-4-green?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-blueviolet?logo=tailwindcss" />
</p>

---

## 🚀 Features

✅ Student login/register with JWT Auth  
✅ File upload (PDFs, docs, images, code) with titles  
✅ View/download all uploaded resources  
✅ Role-based access for `admin` and `students`  
✅ Protected routes (React + Context API)  
✅ RESTful API with Express and MongoDB  
✅ Clean, responsive UI using TailwindCSS  
✅ Search & filter (subjects, categories — coming soon!)

---

## 🛠️ Tech Stack

| Tech        | Description                     |
|-------------|---------------------------------|
| React       | Frontend library (UI components)|
| TailwindCSS | Utility-first CSS styling       |
| Express.js  | Backend web framework (Node.js) |
| MongoDB     | NoSQL database                  |
| Mongoose    | MongoDB ODM for schema modeling |
| Multer      | File uploads via `multipart/form-data` |
| JWT         | JSON Web Tokens for auth        |

---

## 📁 Folder Structure

```bash
student_resource_portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── .env
│   └── index.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── routes/
│       ├── services/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
└── README.md
