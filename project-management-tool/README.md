# Project Management Tool
- A fun and simple project management app built with **React**, **Node.js**, and **MongoDB**.
- Create projects, add tasks with deadlines, and track your progress step by step

# Features
- Create a new project by entering a project name.
- Add tasks with a title and deadline.
- Update task status as **To Do**, **In Progress**, or **Done**.
- Follow a step-by-step workflow from project creation to task management.
- Separate frontend and backend for better project organization.
- Run the application locally on your computer.

# Project Structure
```text
project-management-tool/
├── backend/        # Node.js + Express + MongoDB APIs
├── frontend/       # React app
└── README.md       # This file
```

# Installation & Running
```text
Clone the repo
git clone https://github.com/sharanyakulal17/mydailywork.git
cd mydailywork/project-management-tool
```

# Install dependencies
```bash
# Backend
cd backend
npm install
```
# Frontend
```bash
cd ../frontend
npm install
```
# Start MongoDB
```bash
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

##  How to Use
1. Open the application in your web browser.
2. Enter the **Project Name**.
3. Click the **Next** button.
4. Enter the **Task Title**.
5. Select the **Task Deadline**.
6. Click **Add Task** to add the task to the project.
7. Update the task status using the dropdown:
   - **To Do**
   - **In Progress**
   - **Done**
8. Repeat the process to add more tasks
9. Click **Back** to return to the project name page. (The previous project name will be cleared.)

# Tech Stack
Frontend: React, HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB
Optional Deployment: Netlify (frontend), Heroku (backend)

Author Sharanya Kulal GitHub: https://github.com/sharanyakulal17
