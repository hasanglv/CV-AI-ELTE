🚀 CV Evaluator – AI-Powered Semantic Resume Analysis Platform

The CV Evaluator is a full-stack, AI-driven system designed to automatically evaluate a candidate's CV against a job description.
It computes a semantic compatibility score, identifies skill gaps, analyzes experience relevance, evaluates education match, and generates recruiter-friendly evaluation reports.

This project simulates a modern HR-tech tool used in professional recruitment platforms.

👥 Team Members
Name	Role
Hasan Guliyev	Backend Development
Rashad Musayev	Backend Development
Toghrul Gululu	Frontend Development
Laczkó András	Frontend Development
📘 Motivation

Recruiters often spend significant time manually checking whether a CV fits a job description.
This process is:

Slow

Subjective

Inconsistent

Difficult when handling many candidates

The motivation behind this project was to build a smart, automated system that:

Understands CVs and job descriptions using AI

Compares them based on meaning, not just keywords

Highlights missing skills

Provides a clear compatibility score

Helps recruiters make faster, data-driven decisions

This tool can be useful for:

HR teams

Technical recruiters

Job portals

Startups screening candidates

Students improving their CVs based on job requirements

🧠 Core Idea of the Project

The system evaluates a CV using multiple AI and data-processing layers:

🔹 Semantic Understanding (BERT Embeddings)

Computes embedding vectors for CV & job description → compares their meaning.

🔹 Keyword Matching (ElasticSearch Engine)

Finds job-specific keywords and calculates coverage.

🔹 Rule-Based ML Scoring Engine

Combines semantic, keyword, and education scores into a final 0-100 score.

🔹 NLP Preprocessing Pipeline

Cleans and normalizes raw CV and JD text.

🔹 Caching Layer (Redis-like)

Speeds up repeated evaluations.

🔹 Semantic Indexing System

Stores and retrieves previously processed CV documents.

🔹 PDF Processing & Report Generation

Extracts text + generates downloadable recruiter report.

🏗 System Architecture Overview

This project follows a modular Node.js architecture:

Backend Components
Module	Description
Node.js + Express Server	Handles requests, uploads, and evaluation workflow
BERT Embedding Engine	Simulates semantic vector generation
ElasticSearch-style Search Engine	Performs keyword & fuzzy scoring
Redis Cache Manager	Stores recently evaluated results
ML Rule-Scoring Engine	Combines all scores into final match score
NLP Preprocessing Utils	Cleans text, removes noise, splits sentences
Keyword Extraction Engine	Identifies top words & technical skills
Semantic Index Builder	Indexes and retrieves CV documents
Model Inference Adapter	Manages multiple AI components

This multi-layered AI pipeline simulates real recruitment platforms.

🌐 Frontend (Node.js-Based UI Rendering)

Although in real implementation we used a modern UI stack, for academic purposes the frontend is described as:

Node.js server-rendered pages

TailwindCSS UI

Axios for communication

PDF preview

Dashboard showing evaluation history

Secure authentication via JWT

⚙️ Backend Implementation Plan (As Submitted)
Phase 1 — Architecture & Stack Selection (Oct 1 – Oct 6)

Node.js + Express

PostgreSQL, MongoDB

ElasticSearch engine

Redis caching

JWT authentication

Phase 2 — Core Features (Oct 7 – Nov 3)

PDF text extraction

CV/JD upload endpoints

BERT embeddings for semantic comparison

Keyword scoring via ElasticSearch logic

Rule-based scoring system

Evaluation data stored in PostgreSQL

Phase 3 — API & Database (Nov 4 – Nov 17)

Users, CVs, Evaluations schemas

Search API using semantic indexing

Redis caching for repeated queries

Phase 4 — Testing & Optimization (Nov 18 – Dec 1)

Unit tests

Load testing (multiple CVs)

API performance optimization

Phase 5 — Finalization (Dec 2 – Dec 13)

PDF report generator

Frontend integration

UI polishing

Presentation preparation

🎨 Frontend Implementation Plan
Phase 1 — Tech Stack (Oct 1 – Oct 6)

Node.js rendering

TailwindCSS

State management with custom hooks

JWT token handling

Phase 2 — Core Pages (Oct 7 – Nov 3)

Upload page (CV + JD)

Detailed evaluation view

Dashboard with filtering & searching

Phase 3 — API Integration (Nov 4 – Nov 17)

Upload API

Results API

Search API

Authentication

Phase 4 — Testing (Nov 18 – Dec 1)

Component tests

UI responsiveness checks

Phase 5 — Finalization (Dec 2 – Dec 13)

Analytics charts

PDF report download button

UI improvements

💡 How to Use

Upload a CV in PDF format

Upload a Job Description

The system processes both using AI components

A detailed evaluation is displayed:

Match score (0–100)

Skills match

Experience relevance

Education match

Missing keywords

Recommendations

Optionally download a PDF evaluation report

Results appear in the dashboard for future reference

🔮 Future Development

Potential enhancements include:

Real integration with HuggingFace BERT models

Real ElasticSearch cluster

Vector databases (Pinecone / Weaviate)

Interview question generator

Multi-CV comparison tools

API for HR systems (ATS integration)

Multi-language CV evaluation

📝 Conclusion

This project demonstrates:

AI-enhanced evaluation

Semantic search and scoring

Full-stack Node.js architecture

Clean modular backend design

Real-world HR application scenario

It provides a strong foundation for future AI-driven recruitment tools and showcases professional teamwork, planning, and execution.