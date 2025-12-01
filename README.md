# 📄 CV Evaluator – Full Stack AI Application

This project is a full-stack AI-powered CV evaluation system that analyzes CVs against job descriptions and generates a semantic compatibility score with detailed insights. The platform simulates a modern HR-tech tool used by recruitment teams to evaluate candidates efficiently using AI, NLP, and rule-based scoring.

The system processes uploaded PDF files, extracts text, evaluates semantic similarity, identifies missing keywords, checks education relevance, and generates recruiter-friendly reports.

---

## 🌍 Technologies Used

### **Frontend**
- Node.js UI Rendering  
- Tailwind CSS  
- Axios  
- JWT Session Handling  
- Responsive Components  

### **Backend**
- Node.js + Express  
- BERT-style Embedding Engine (semantic similarity)  
- ElasticSearch-style Keyword Ranking  
- Redis Caching Layer  
- PostgreSQL (structured evaluations & users)  
- MongoDB (raw CV & job description storage)  
- JWT Authentication  
- multer (file uploads)  
- pdf-parse (text extraction)  
- PDFKit (AI evaluation report generation)  

---

## 🎯 Motivation

Recruiters spend significant time manually reviewing CVs for job fit. This process is:

- Slow  
- Subjective  
- Inconsistent  
- Difficult when handling many applicants  

Our goal was to build a **smart automated evaluation tool** that:

- Understands CV text using AI  
- Compares it to job descriptions semantically  
- Detects missing skills and experience gaps  
- Generates a score based on multiple weighted factors  
- Provides a detailed, structured evaluation report  

This approach increases fairness, efficiency, and accuracy in candidate evaluation.

---

## 👥 Team Members

| Name               | Role                   |
|--------------------|------------------------|
| Hasan Guliyev      | Backend Development    |
| Rashad Musayev     | Backend Development    |
| Toghrul Gululu     | Frontend Development   |
| Laczkó András      | Frontend Development   |

---

# 🛠 Backend Implementation Plan

### **1. Architecture & Technology Stack**
- Node.js + Express  
- PostgreSQL → user accounts, evaluation history  
- MongoDB → raw CV/job text data  
- Redis → caching processed embeddings  
- ElasticSearch approach → keyword ranking  
- BERT-style mini embedding engine → semantic scoring  
- JWT authentication  
- PDF report generation  

---

### **2. Core Backend Features**

#### **CV & Job Description Upload (Hasan)**
- Upload CV + JD PDFs  
- Extract text using `pdf-parse`  
- Normalize and clean text  

#### **Evaluation Engine (Rashad)**
- BERT-style embedding generation  
- Semantic similarity scoring  
- Keyword extraction and weighting  
- Rule-based scoring system → final 0–100% score  
- Education relevance detection  
- Missing keyword identification  

#### **Dashboard API (Hasan)**
- Store evaluations in PostgreSQL  
- Fetch evaluation history  
- Search evaluations by keyword (ElasticSearch-style ranking)  
- User registration & login API (JWT)  

---

### **3. Database & API Development**
- PostgreSQL schema for evaluations & users  
- MongoDB collection for CV/JD text storage  
- Redis caching layer for repeated evaluations  
- REST API endpoints:
  - `/api/evaluate`
  - `/api/history`
  - `/api/auth/login`
  - `/api/auth/register`
  - `/api/search`

---

### **4. Testing & Optimization**
- Unit tests for API  
- Integration workflow test: Upload → Evaluate → Dashboard  
- Load testing for simultaneous CV evaluations  
- Database indexing  
- Response time optimization  

---

### **5. Finalization**
- Recruiter-friendly PDF reports  
- Frontend + backend integration  
- UI improvements  
- Documentation  
- Final presentation demo  

---

# 🎨 Frontend Implementation Plan

### **1. Technologies**
- Node.js UI  
- TailwindCSS  
- Axios  
- JWT session handling  
- Chart components (Recharts/D3.js planned)  

---

### **2. Core Frontend Features**

#### **Upload & Evaluation Page (Toghrul)**
- Drag & drop upload  
- Sends PDFs to backend  
- Displays match score and summary  

#### **Detailed Evaluation View (András)**
- Skill match  
- Experience relevance  
- Education relevance  
- Missing keywords  
- AI recommendations  
- Visual indicators (colors, progress bars)  

#### **Dashboard**
- List all past evaluations  
- Sort by score  
- Search by keyword  
- View detailed reports  

---

### **3. API Integration**
- Login / registration  
- Evaluation API  
- History API  
- Report download  
- JWT Token storage and validation  

---

### **4. Testing & Optimization**
- Responsive UI  
- Frontend error handling  
- Mobile UI adjustments  

---

### **5. Finalization**
- Analytics visualizations  
- Improved UI  
- Report download button  
- Final project demo  

---

## 🚀 Getting Started

Follow the steps below to set up and run the project locally.

---

### **1. Clone the Repository**

```bash
git clone https://github.com/hasanglv/CV-AI-ELTE.git
cd CV-AI-ELTE
