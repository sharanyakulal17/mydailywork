# Project Management Tool
- A fun and simple project management app built with **React**, **Node.js**, and **MongoDB**.
- Create projects, add tasks with deadlines, and track your progress step by step

Features
-Add a project name
-Add tasks with title and deadline
Track task status: To Do, In Progress, Done
Step-by-step workflow: first project → then tasks
Frontend and backend separated for easier work
Works locally on your computer

📂 Project Structure
project-management-tool/
├── backend/        # Node.js + Express + MongoDB APIs
├── frontend/       # React app
└── README.md       # This file

⚡ Installation & Running
Clone the repo
git clone https://github.com/sharanyakulal17/mydailywork.git
cd mydailywork/project-management-tool

Install dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

Start MongoDB
Make sure MongoDB is running, example for Windows:
"C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe" --dbpath "C:\Users\Sharanya\Documents\mongo-data"

Start backend server
cd ../backend
node server.js
Backend runs at: http://localhost:5000

Start frontend app
cd ../frontend
npm start
Frontend runs at: http://localhost:3000

📝 How to Use
Open the app in your browser.
Step 1: Enter your project name → Click Next
Step 2: Add tasks by entering:
Task Title
Task Deadline
Then click Add Task ✅
Track tasks using the status dropdown: To Do, In Progress, Done
Click Back to return to project name input (previous input will be cleared) 🔙
🛠️ Tech Stack
Frontend: React, HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB
Optional Deployment: Netlify (frontend), Heroku (backend)

Author Sharanya Kulal GitHub: https://github.com/sharanyakulal17
