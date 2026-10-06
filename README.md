# AI Study Assistant

<<<<<<< HEAD
An intelligent full-stack web-based study assistant designed to help students organize their learning, access study materials, take quizzes, track progress, and interact with AI-powered learning features.

The project is currently under active development as a deployment-focused full-stack application.

---

## 🚀 Current Project Status

The AI Study Assistant currently includes:

- React + Vite frontend
- Flask REST API backend
- PostgreSQL / Supabase database
- SQLAlchemy ORM
- JWT authentication
- User registration and login
- Protected backend APIs
- Protected React routes
- Frontend ↔ backend authentication integration
- Complete study-oriented frontend interface
- AI Study Assistant interface
- RAG-based study material retrieval
- ChromaDB vector database
- Sentence Transformer embeddings
- PDF study material processing
- Semantic search and retrieval
- Frontend integration with the RAG backend

The project has progressed from a basic frontend/authentication system into a full-stack application with an integrated RAG pipeline.

---

# 📋 Features

## Frontend

The React application currently includes:

- Login
- Registration
- Dashboard
- Subjects
- Subject Details
- AI Study Assistant
- Quizzes
- Quiz
- Quiz Result
- Progress
- Profile
- Responsive layouts
- Custom CSS styling
- Protected pages
- Authentication state management
- Dashboard statistics and progress visualization
- Subject progress visualization
- Quiz interface
- Quiz result interface
- Progress analytics interface
- Profile interface
- AI chat interface

---

## Backend

The Flask backend currently provides:

- REST API
- PostgreSQL integration
- Supabase PostgreSQL integration
- SQLAlchemy ORM
- User model
- User registration
- User login
- Password hashing
- JWT authentication
- Protected API endpoints
- Current-user endpoint
- RAG retrieval endpoint
- Frontend ↔ backend communication

---

# 🔐 Authentication

The project currently uses JWT-based authentication.

### Authentication Features

- User registration
- User login
- Password hashing
- JWT access tokens
- Protected API routes
- React authentication context
- Local storage authentication state
- Protected frontend routes
- Backend authentication validation

### Authentication Flow

```text
React Login Page
       │
       ▼
POST /api/auth/login
       │
       ▼
Flask Backend
       │
       ▼
PostgreSQL / Supabase
       │
       ▼
Validate Credentials
       │
       ▼
Generate JWT Access Token
       │
       ▼
React AuthContext
       │
       ▼
Store Authentication State
       │
       ▼
Protected React Pages
       │
       ▼
Protected Backend APIs

🏗️ Project Architecture

AI Study Assistant
│
├── frontend/
=======
An intelligent web-based study assistant designed to help students organize their learning, manage study resources, take quizzes, track progress, and eventually interact with AI-powered learning features.

This project is currently under active development as a deployment project.

## 🚀 Current Project Status

The current version includes a working React frontend connected to a Flask backend with PostgreSQL/Supabase database integration and JWT-based authentication.

### Implemented

* React frontend
* Flask backend
* REST API development
* PostgreSQL database
* Supabase PostgreSQL integration
* SQLAlchemy ORM
* User registration
* User login
* Password hashing
* JWT access-token authentication
* Protected API endpoint
* React authentication context
* Local storage authentication state
* Frontend ↔ backend integration
* Responsive authentication UI
* Dashboard and study-related frontend pages

### Currently Available Frontend Pages

* Login
* Register
* Dashboard
* Subjects
* Subject Details
* Study Assistant
* Quizzes
* Quiz
* Quiz Result
* Progress
* Profile

## 🏗️ Project Architecture

```text
AI Study Assistant
│
├── frontend/                 # React application
>>>>>>> origin/main
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
<<<<<<< HEAD
│   │
│   └── package.json
│
├── backend/
=======
│   └── package.json
│
├── backend/                  # Flask REST API
>>>>>>> origin/main
│   ├── app/
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── models.py
│   │   └── routes.py
<<<<<<< HEAD
│   │
│   ├── run.py
│   └── requirements.txt
│
├── docker/
│
├── nginx/
│
├── .github/
│
├── .gitignore
│
└── README.md


🛠️ Technology Stack
Frontend
React
Vite
JavaScript
React Router
CSS
Lucide React
Backend
Python
Flask
Flask-CORS
Flask-SQLAlchemy
Flask-JWT-Extended
Werkzeug
Database
PostgreSQL
Supabase
SQLAlchemy
Authentication
JWT access tokens
Password hashing
Protected API routes
React authentication context
Browser local storage
AI / RAG
Python
LangChain
ChromaDB
Sentence Transformers
PyPDF
Vector embeddings
Semantic search
Retrieval-Augmented Generation (RAG)
🤖 AI Study Assistant

The project includes an AI Study Assistant interface that allows students to ask questions about their study material.

Students can ask questions related to:

Study material
Concepts
Projects
Exam preparation
Quiz preparation
Learning topics

The React AI Study Assistant communicates with the Flask backend and uses the RAG retrieval pipeline to find relevant information from the available study material.

📚 RAG Implementation

The Retrieval-Augmented Generation system has been implemented in multiple phases.

RAG Phase 1 — Completed

The initial RAG infrastructure has been implemented.

Completed
Study material ingestion
PDF processing
Text extraction
Text chunking
Embedding generation
Sentence Transformer embeddings
ChromaDB vector storage
Semantic similarity search
Retrieval pipeline

The main RAG libraries used include:

LangChain
ChromaDB
Sentence Transformers
PyPDF
🔎 RAG Phase 2 — Completed

The retrieval system has been integrated with the backend and frontend.

Completed
RAG retrieval endpoint
Study material retrieval
Semantic question search
Relevant document/chunk retrieval
Backend RAG integration
React AI Assistant integration
Frontend → RAG API communication
Retrieval testing
Current RAG Flow
Student Question
       │
       ▼
React AI Study Assistant
       │
       ▼
askRag()
       │
       ▼
Flask RAG Endpoint
       │
       ▼
Question Processing
       │
       ▼
Embedding Generation
       │
       ▼
ChromaDB Vector Search
       │
       ▼
Relevant Study Material
       │
       ▼
Retrieved Context
       │
       ▼
AI Study Assistant
       │
       ▼
Student
🧪 RAG Testing

The RAG system has been tested using questions based on the available study material.

Example:

Question:

What is the RoadSafe project?

The system retrieves relevant information from the study material, including the RoadSafe project overview and its purpose.

The AI Study Assistant is therefore connected to the implemented retrieval pipeline rather than functioning only as a static chat interface.

⚠️ Current AI Generation Status

The project contains external LLM/OpenAI generation integration code.

However, external AI generation is currently limited because of API credit/usage availability.

Therefore, the current development setup can operate using retrieved study material without depending entirely on external LLM generation.

The retrieval pipeline can continue to be developed and tested independently.


📊 Current Development Progress

Frontend
   ✅ React UI
   ✅ Vite
   ✅ Routing
   ✅ Login/Register
   ✅ Authentication UI
   ✅ Dashboard
   ✅ Subjects
   ✅ Subject Details
   ✅ AI Study Assistant
   ✅ Quiz pages
   ✅ Quiz Result
   ✅ Progress
   ✅ Profile
   ✅ Responsive styling
   ✅ Frontend ↔ Backend authentication integration

=======
│   ├── run.py
│   └── requirements.txt
│
├── docker/                   # Docker configuration
├── nginx/                    # Nginx configuration
├── .github/                  # GitHub configuration
├── .gitignore
└── README.md
```

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* React Router
* JavaScript
* CSS
* Lucide React

### Backend

* Python
* Flask
* Flask-CORS
* Flask-SQLAlchemy
* Flask-JWT-Extended
* Werkzeug

### Database

* PostgreSQL
* Supabase
* SQLAlchemy

### Authentication

* JWT access tokens
* Password hashing
* Protected API routes
* React authentication context
* Browser local storage

## 🔐 Authentication Flow

The current authentication flow works as follows:

```text
React Login Page
       ↓
POST /api/auth/login
       ↓
Flask Backend
       ↓
PostgreSQL / Supabase
       ↓
Validate User Credentials
       ↓
Generate JWT Access Token
       ↓
React AuthContext
       ↓
Store Token in localStorage
       ↓
Access Protected Pages / APIs
```

## 🔌 Current API Endpoints

### Health Check

```http
GET /api/health
```

Returns the current backend health status.

### Register

```http
POST /api/auth/register
```

Example request:

```json
{
  "name": "Test Student",
  "email": "student@example.com",
  "password": "password123"
}
```

### Login

```http
POST /api/auth/login
```

Example request:

```json
{
  "email": "student@example.com",
  "password": "password123"
}
```

The endpoint returns a JWT access token after successful authentication.

### Current User

```http
GET /api/auth/me
```

Requires:

```http
Authorization: Bearer <access_token>
```

Returns the authenticated user's information.

## 💻 Running the Project Locally

### Backend

Navigate to the backend directory:

```bash
cd backend
```

Activate the Python virtual environment.

On Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Run the Flask application:

```bash
python run.py
```

The backend runs at:

```text
http://127.0.0.1:5000
```

### Frontend

Open another terminal and navigate to:

```bash
cd frontend
```

Install dependencies if required:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at the URL shown by Vite in the terminal.

## 🔑 Environment Variables

The backend uses environment variables for configuration.

Example:

```env
FLASK_DEBUG=True
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret-key
DATABASE_URL=your-postgresql-database-url
```

**Important:** Never commit the actual `.env` file, database password, JWT secret, or other private credentials to GitHub.

The `.gitignore` file is configured to exclude `.env`.

## 📊 Database

The project currently uses PostgreSQL through Supabase.

The initial implemented database model is the `User` model.

### User

```text
id
name
email
password_hash
created_at
```

Passwords are stored as hashes rather than plain text.

## 🧪 Current Testing

The following functionality has been tested successfully:

* Backend starts successfully
* PostgreSQL/Supabase connection works
* User registration works
* Duplicate email validation works
* User login works
* JWT access token is generated
* Protected `/api/auth/me` endpoint works
* React frontend communicates with Flask backend
* Successful login redirects the user to the dashboard

## 🔄 Current Development Progress

```text
Frontend
   ✅ React UI
   ✅ Routing
   ✅ Login/Register
   ✅ Dashboard
   ✅ Study pages
   ✅ Quiz pages
   ✅ Progress/Profile pages
>>>>>>> origin/main

Backend
   ✅ Flask
   ✅ REST APIs
<<<<<<< HEAD
   ✅ PostgreSQL
   ✅ Supabase
   ✅ SQLAlchemy
   ✅ User model
   ✅ Password hashing
=======
   ✅ PostgreSQL connection
   ✅ SQLAlchemy
   ✅ User model
>>>>>>> origin/main
   ✅ Registration
   ✅ Login
   ✅ JWT access authentication
   ✅ Protected API
<<<<<<< HEAD
   ✅ Current-user API
   ✅ RAG endpoint


AI / RAG
   ✅ RAG Phase 1
   ✅ Study material processing
   ✅ PDF extraction
   ✅ Text chunking
   ✅ Sentence Transformer embeddings
   ✅ ChromaDB vector database
   ✅ Semantic retrieval
   ✅ RAG Phase 2
   ✅ Backend RAG integration
   ✅ Frontend RAG integration
   ✅ AI Study Assistant connected to RAG
   ⚠️ External LLM generation limited by API availability
   ⬜ Advanced RAG Phase 3
   ⬜ LangGraph workflows


Application Data APIs
   ⬜ Study material CRUD APIs
   ⬜ Persistent study-material management
   ⬜ Quiz database APIs
   ⬜ Quiz result persistence
   ⬜ Persistent progress tracking
   ⬜ Real-time dashboard data APIs


Production Deployment
   ⬜ Docker production setup
   ⬜ VPS deployment
   ⬜ Nginx configuration
   ⬜ Domain/DNS configuration
   ⬜ Production environment configuration
   ⬜ GitHub Actions / CI/CD


👩‍💻 Project
AI Study Assistant

A deployment-focused full-stack application built using:

React
Vite
Flask
PostgreSQL
Supabase
SQLAlchemy
JWT
LangChain
ChromaDB
Sentence Transformers
PyPDF

=======

AI Features
   ⬜ AI API integration
   ⬜ RAG
   ⬜ LangChain
   ⬜ LangGraph

Deployment
   ⬜ VPS deployment
   ⬜ Nginx configuration
   ⬜ Domain/DNS configuration
   ⬜ Production configuration
   ⬜ GitHub Actions / CI/CD
```

## 🗺️ Future Development

The next stages of development will include:

1. Complete authentication architecture with refresh tokens.
2. Connect the remaining frontend modules to backend APIs.
3. Implement study-material management.
4. Implement quiz data and result storage.
5. Implement progress tracking.
6. Integrate a third-party AI/LLM API.
7. Add AI-powered study assistance.
8. Implement RAG for study materials.
9. Explore LangChain for AI workflows.
10. Explore LangGraph for multi-step AI workflows.
11. Containerize the application for production.
12. Deploy the application to a VPS.
13. Configure Nginx as a reverse proxy.
14. Configure domain and DNS.
15. Create GitHub Actions CI/CD workflows.

## 📌 Development Note

This repository represents the current working development stage of the AI Study Assistant. Features listed under future development are planned and are not yet considered production-ready.

## 👩‍💻 Project

**AI Study Assistant**

Built as a deployment-focused full-stack application using React, Flask, PostgreSQL/Supabase, and JWT authentication.
>>>>>>> origin/main
