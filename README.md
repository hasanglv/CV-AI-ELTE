📄 CV Evaluator – Full Stack AI Application

This project is a full-stack AI-powered CV evaluation tool that analyzes CVs against job descriptions and returns a semantic compatibility score with detailed breakdowns. The system includes both frontend and backend components built with modern web and AI technologies.

🌐 Technologies Used
Frontend

Node.js UI Rendering

Tailwind CSS

Axios

JWT Session Handling

Responsive Components

Backend

Node.js + Express

BERT-style Embedding Engine (semantic similarity)

ElasticSearch-style Keyword Ranking

Redis Caching Layer

PostgreSQL (structured evaluations & users)

MongoDB (raw CV/JD text storage)

JWT Authentication

multer (file uploads)

pdf-parse (text extraction)

PDFKit (report generation)

📦 Getting Started

Follow the steps below to set up and run the project locally.

1. Clone the Repository
git clone https://github.com/hasanglv/CV-AI-ELTE.git
cd CV-AI-ELTE

2. Install Dependencies

Install backend & frontend dependencies:

npm install

3. Set Up Environment Variables

Create a .env file inside the backend directory:

OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
PDF_STORAGE_PATH=uploads
MAX_FILE_SIZE=5242880


🔐 Do not commit your .env file.

4. Run the Application
npm run dev


This starts the backend and frontend development servers.

📁 Project Structure
CV-AI-ELTE/
├── backend/
│   ├── server.js
│   ├── bertEmbeddingEngine.js
│   ├── semanticSearchEngine.js
│   ├── redisCacheManager.js
│   ├── mlRuleScoringEngine.js
│   ├── textNormalizationUtils.js
│   ├── keywordExtractionService.js
│   ├── semanticIndexBuilder.js
│   ├── modelInferenceAdapter.js
│   └── uploads/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json

🧠 System Overview

The backend implements a multi-stage AI evaluation pipeline:

PDF Text Extraction

NLP Preprocessing & Normalization

BERT-style Embedding Vector Generation

Semantic Similarity Computation

Keyword Extraction + ElasticSearch-style Ranking

Education & Experience Matching

Rule-Based Scoring Engine (0–100%)

PDF Report Generation

Redis Caching for High Performance

Secure JWT Authentication