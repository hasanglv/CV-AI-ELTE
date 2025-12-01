🌈✨ CV Evaluator – AI-Powered Semantic Resume Analysis Platform ✨🌈
<p align="center"> <img src="https://img.shields.io/badge/Node.js-Backend-3C873A?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-Database-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/PostgreSQL-Structured_DB-336791?style=for-the-badge&logo=postgresql&logoColor=white" /> <img src="https://img.shields.io/badge/ElasticSearch-Semantic_Search-005571?style=for-the-badge&logo=elastic&logoColor=white" /> <img src="https://img.shields.io/badge/Redis-Caching-DC382D?style=for-the-badge&logo=redis&logoColor=white" /> <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" /> </p>
🌟 Overview

The CV Evaluator is an AI-powered, full-stack system that analyzes a CV against a job description using:
🎯 Semantic similarity (BERT-style embeddings)
🔍 Keyword scoring (ElasticSearch-style search engine)
🧠 Rule-based ML scoring engine (0–100 match score)
📚 Education & experience relevance
📄 PDF-based report generation

This project represents a modern HR-Tech evaluation tool built with a multi-layer Node.js architecture.

👥 Team Members
👤 Name	💼 Role
Hasan Guliyev	Backend Development
Rashad Musayev	Backend Development
Toghrul Gululu	Frontend Development
Laczkó András	Frontend Development
💡 Motivation

Recruiters often deal with challenges such as:

🐌 Slow manual review

🤔 Subjective judgments

🔁 Inconsistent evaluations

📂 High volume of candidates

❓ Difficulty detecting missing skills

Our goal was to build a smart automation tool that:

✨ Understands CVs using AI
✨ Compares CV & JD by meaning, not just keywords
✨ Highlights missing skills & experience gaps
✨ Generates accurate match scores
✨ Helps recruiters save time

🧠 Key Features (Colorful Summary)

🔥 AI-Powered Semantic Matching
🧩 BERT-style Embedding Engine
🔍 ElasticSearch-like Keyword Ranking
📊 Rule-Based Scoring (0–100%)
📘 Education Relevance Detector
⚡ Redis Caching Layer
🔐 JWT Authentication System
📝 PDF Report Generation
💾 PostgreSQL + MongoDB Storage
📈 Dashboard & Analytics

🏗 Backend Implementation Plan
🌐 1. Architecture & Technology (Oct 1 – Oct 6)

🚀 Node.js + Express

🗂 PostgreSQL & MongoDB

🔎 ElasticSearch (keyword & semantic ranking)

⚡ Redis (caching)

🔐 JWT authentication

🧩 2. Core Modules (Oct 7 – Nov 3)
📥 Upload System (Hasan)

PDF upload (≤ 5MB)

Text extraction via pdf-parse

🧠 Evaluation Engine (Rashad)

BERT-style embeddings

ElasticSearch keyword scoring

Rule-based scoring

Education & experience evaluation

📊 Dashboard API (Hasan)

Fetch scores, sections, history

User auth system

🗄 3. Database & APIs (Nov 4 – Nov 17)

Users, CVs, Evaluations schema

Search API

Redis caching for fast evaluation

🧪 4. Testing & Optimization (Nov 18 – Dec 1)

Unit tests

Upload → Evaluate → Dashboard integration

Query optimization

🎁 5. Finalization (Dec 2 – Dec 13)

📄 PDF report generator

🎨 UI integration

🐞 Bug fixes

🎨 Frontend Implementation Plan
🖥 1. Tech Stack (Oct 1 – Oct 6)

Node.js rendering layer

TailwindCSS

React Query / Redux

JWT session handling

📦 2. Core UI Components (Oct 7 – Nov 3)
📤 Upload Page (Toghrul)

Drag-and-drop

Real-time evaluation loading

📊 Detailed Evaluation Page (András)

Skill match

Experience relevance

Education match

Missing keywords

Recommendations

Charts & visual indicators

🗂 Dashboard

Sorting

Filtering

Search

🎯 Final Product Summary

Your final application provides:

🌟 AI-powered CV vs JD comparison
📊 0–100 scoring system
📘 Skills, experience, education breakdown
❗ Missing keywords list
📄 PDF report export
🧭 Dashboard for managing evaluations
🔐 Secure user login

This system looks and behaves like a professional HR evaluation platform.

🧩 System Components (Colorful Table)
Component	Purpose
🧠 AI Engine	Embeddings + semantic similarity
🔍 Search Engine	Keyword & fuzzy scoring
🧮 ML Rule Engine	Weighted scoring logic
✨ NLP Pipeline	Text normalization & cleaning
📄 PDF Processor	Extracts data from documents
🗂 Dashboard	User interface for results
🔐 Auth System	JWT-secured login
⚡ Redis Cache	Performance boost
🧭 How to Use

1️⃣ Upload your CV
2️⃣ Upload the Job Description
3️⃣ System automatically evaluates both
4️⃣ View the beautiful analysis dashboard
5️⃣ Download the PDF report
6️⃣ Track past evaluations

🔮 Future Improvements

✨ Use real HuggingFace BERT models
✨ Integrate a true ElasticSearch cluster
✨ Add multi-language evaluation
✨ Add ATS (Applicant Tracking System) integration
✨ AI-generated interview questions
✨ Recruiter collaboration dashboard