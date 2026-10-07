# AI Study Assistant

An intelligent full-stack web-based study assistant designed to help students organize their learning, access study materials, take quizzes, track progress, and interact with AI-powered learning features.

The project is built using a React frontend, Flask backend, PostgreSQL/Supabase database, JWT authentication, and a Retrieval-Augmented Generation (RAG) pipeline powered by LangChain, ChromaDB, Sentence Transformers, and Google Gemini.

---

## 🚀 Current Project Status

The project currently includes:

* React + Vite frontend
* Flask REST API backend
* PostgreSQL / Supabase database
* SQLAlchemy ORM
* JWT authentication
* User registration and login
* Protected backend APIs
* Protected React routes
* Frontend ↔ backend integration
* Complete study-oriented frontend interface
* AI Study Assistant
* RAG-based study material retrieval
* ChromaDB vector database
* Sentence Transformer embeddings
* PDF study material processing
* Semantic search and retrieval
* Google Gemini AI generation
* Frontend integration with the RAG backend

The application has progressed from a basic frontend/authentication system into a full-stack AI-powered study application.

---

# 📋 Features

## Frontend

The React application includes:

* Login
* Registration
* Dashboard
* Subjects
* Subject Details
* AI Study Assistant
* Quizzes
* Quiz
* Quiz Result
* Progress
* Profile
* Responsive layouts
* Custom CSS styling
* Protected routes
* Authentication state management
* Dashboard statistics
* Subject progress visualization
* Quiz interface
* Quiz result interface
* Progress analytics
* Profile interface
* AI chat interface

---

## Backend

The Flask backend provides:

* REST API
* PostgreSQL integration
* Supabase PostgreSQL integration
* SQLAlchemy ORM
* User model
* User registration
* User login
* Password hashing
* JWT authentication
* Protected API endpoints
* Current-user endpoint
* RAG retrieval endpoint
* AI generation endpoint
* Frontend ↔ backend communication

---

# 🔐 Authentication

The application uses JWT-based authentication.

### Authentication Features

* User registration
* User login
* Password hashing
* JWT access tokens
* Protected API routes
* React authentication context
* Local storage authentication state
* Protected frontend routes
* Backend authentication validation

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
```

---

# 🤖 AI Study Assistant

The project includes an AI Study Assistant that allows students to ask questions about their study material.

Students can ask questions related to:

* Study material
* Concepts
* Projects
* Exam preparation
* Quiz preparation
* Learning topics

The AI Study Assistant combines retrieved study material with Google Gemini to generate AI-powered responses.

### AI Flow

```text
Student Question
       │
       ▼
React AI Study Assistant
       │
       ▼
Flask Backend
       │
       ▼
RAG Retrieval
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
Google Gemini
       │
       ▼
AI-Generated Response
       │
       ▼
Student
```

---

# 📚 RAG Implementation

The Retrieval-Augmented Generation system has been implemented in multiple phases.

## RAG Phase 1 — Completed

The initial RAG infrastructure has been implemented.

### Completed

* Study material ingestion
* PDF processing
* Text extraction
* Text chunking
* Sentence Transformer embeddings
* ChromaDB vector storage
* Semantic similarity search
* Retrieval pipeline

### Main RAG Technologies

* LangChain
* ChromaDB
* Sentence Transformers
* PyPDF

---

## 🔎 RAG Phase 2 — Completed

The retrieval system has been integrated with the Flask backend and React frontend.

### Completed

* RAG retrieval endpoint
* Study material retrieval
* Semantic question search
* Relevant document/chunk retrieval
* Backend RAG integration
* React AI Assistant integration
* Frontend → RAG API communication
* Retrieval testing
* Gemini integration
* AI response generation using retrieved context

### Current RAG Flow

```text
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
Google Gemini
       │
       ▼
Generated Answer
       │
       ▼
Student
```

---

# 🧪 RAG Testing

The RAG system has been tested using questions based on the available study material.

### Example

**Question:**

```text
What is the RoadSafe project?
```

The system retrieves relevant information from the RoadSafe study material, including the project overview and its purpose.

The retrieved information can then be passed to Google Gemini to generate a student-friendly response.

---

# 🧠 Google Gemini Integration

The project uses Google Gemini for AI response generation.

The Gemini API is configured through an environment variable:

```env
GEMINI_API_KEY=your-gemini-api-key
```

The API key is loaded through the Flask application configuration and is **not stored directly in the source code**.

### Gemini Integration

```text
React
  │
  ▼
Flask Backend
  │
  ▼
RAG Retrieval
  │
  ▼
Retrieved Context
  │
  ▼
Google Gemini
  │
  ▼
AI Response
```

The Gemini integration has been tested successfully through the Flask application.

---

# 🏗️ Project Architecture

```text
AI Study Assistant
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── ai_service.py
│   │   ├── config.py
│   │   ├── models.py
│   │   └── routes.py
│   │
│   ├── rag/
│   │   └── rag_service.py
│   │
│   ├── data/
│   │   └── vector_db/
│   │
│   ├── tests/
│   ├── run.py
│   └── requirements.txt
│
├── .github/
├── .gitignore
└── README.md
```

---

# 🛠️ Technology Stack

## Frontend

* React
* Vite
* JavaScript
* React Router
* CSS
* Lucide React

## Backend

* Python
* Flask
* Flask-CORS
* Flask-SQLAlchemy
* Flask-JWT-Extended
* Werkzeug

## Database

* PostgreSQL
* Supabase
* SQLAlchemy

## Authentication

* JWT access tokens
* Password hashing
* Protected API routes
* React authentication context
* Browser local storage

## AI / RAG

* Google Gemini
* Google GenAI SDK
* LangChain
* ChromaDB
* Sentence Transformers
* PyPDF
* Vector embeddings
* Semantic search
* Retrieval-Augmented Generation

---

# 🔌 Current API Endpoints

## Health Check

```http
GET /api/health
```

Returns the current backend health status.

## Register

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

## Login

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

## Current User

```http
GET /api/auth/me
```

Requires:

```http
Authorization: Bearer <access_token>
```

Returns information about the authenticated user.

## RAG

The backend also provides RAG functionality for retrieving relevant study material based on student questions.

---

# 💻 Running the Project Locally

## Backend

Navigate to the backend directory:

```powershell
cd backend
```

Activate the Python virtual environment.

On Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```powershell
pip install -r requirements.txt
```

Configure the required environment variables in:

```text
backend/.env
```

Run the Flask application:

```powershell
python run.py
```

The backend normally runs at:

```text
http://127.0.0.1:5000
```

---

## Frontend

Open another terminal and navigate to:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

The frontend URL will be displayed by Vite in the terminal.

---

# 🔑 Environment Variables

The backend uses environment variables for configuration.

Example:

```env
FLASK_DEBUG=True
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret-key
DATABASE_URL=your-postgresql-database-url
GEMINI_API_KEY=your-gemini-api-key
```

### Important

Never commit the actual `.env` file to GitHub.

Do not expose:

* Gemini API key
* Database password
* JWT secret
* Flask secret key
* Other private credentials

The project uses `.gitignore` to prevent `.env` files from being committed.

---

# 📊 Database

The project uses PostgreSQL through Supabase.

The currently implemented database model includes the `User` model.

### User

```text
id
name
email
password_hash
created_at
```

Passwords are stored as hashes rather than plain text.

---

# 🧪 Testing

The following functionality has been tested during development:

* Backend starts successfully
* PostgreSQL/Supabase connection
* User registration
* Duplicate email validation
* User login
* JWT access token generation
* Protected `/api/auth/me` endpoint
* React frontend communication with Flask
* Successful login and dashboard access
* RAG document retrieval
* Semantic search
* ChromaDB vector retrieval
* Gemini API connectivity
* Gemini AI response generation
* RAG + AI integration

---

# 📈 Current Development Progress

```text
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
   ✅ Frontend ↔ Backend integration

Backend
   ✅ Flask
   ✅ REST APIs
   ✅ PostgreSQL
   ✅ Supabase
   ✅ SQLAlchemy
   ✅ User model
   ✅ Password hashing
   ✅ Registration
   ✅ Login
   ✅ JWT authentication
   ✅ Protected APIs
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
   ✅ Google Gemini integration
   ✅ Gemini response generation

Deployment
   ✅ GitHub repository
   ⬜ Frontend deployment
   ⬜ Backend deployment
   ⬜ Production environment configuration
   ⬜ Production API configuration
   ⬜ Domain/DNS configuration
   ⬜ CI/CD
```

---

# 🚀 Deployment

The project is being prepared for production deployment.

The source code is maintained in GitHub, and the next deployment stage is to deploy the frontend and backend to appropriate hosting services.

Production deployment will require:

* Frontend hosting
* Flask backend hosting
* Production PostgreSQL/Supabase configuration
* Gemini API environment variable
* Production CORS configuration
* Frontend API URL configuration
* Secure environment variables
* Backend health monitoring

---

# 🔮 Future Development

Planned improvements include:

1. Study-material management APIs
2. Persistent study-material storage
3. Quiz database APIs
4. Quiz result persistence
5. Persistent progress tracking
6. Advanced RAG capabilities
7. Improved AI study workflows
8. LangGraph-based workflows
9. Additional AI-powered study features
10. Production deployment
11. Production environment optimization
12. CI/CD automation
13. Domain and DNS configuration
14. Improved monitoring and error handling

---

# 📌 Project

**AI Study Assistant**

A deployment-focused full-stack AI learning application built using:

* React
* Vite
* Flask
* PostgreSQL
* Supabase
* SQLAlchemy
* JWT
* Google Gemini
* LangChain
* ChromaDB
* Sentence Transformers
* PyPDF

The application combines traditional study-management functionality with AI-powered retrieval and generation to help students interact with their study materials more effectively.
