// mlRuleScoringEngine.js
// Multi-factor rule-based scoring engine with weighted components
// Analyzes semantic similarity, keyword match, education relevance, density, heuristics

import crypto from "crypto";

export class MLRuleScoringEngine {
  constructor() {
    this.weights = {
      semantic: 0.55,
      keyword: 0.25,
      education: 0.15,
      lengthPenalty: 0.05,
    };
  }

  scoreSemantic(similarity) {
    return similarity * this.weights.semantic;
  }

  scoreKeyword(keywordScore) {
    return keywordScore * this.weights.keyword;
  }

  scoreEducation(cvText) {
    const eduWords = ["bachelor", "master", "degree", "computer science"];
    const found = eduWords.some((w) => cvText.toLowerCase().includes(w));
    return found ? 100 * this.weights.education : 0;
  }

  scoreLengthPenalty(cvText) {
    const words = cvText.split(/\s+/).length;
    return words > 800 ? -words * this.weights.lengthPenalty * 0.1 : 0;
  }

  combineScores(semantic, keyword, education, penalty) {
    let total = semantic + keyword + education + penalty;
    total = Math.max(0, Math.min(total, 100));
    return Math.round(total);
  }

  generateReport(cvText, jobText) {
    return {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      stats: {
        cvWords: cvText.split(/\s+/).length,
        jdWords: jobText.split(/\s+/).length,
      },
      summary: "Simulated rule-based evaluation.",
    };
  }
}

export const mlScoringEngine = new MLRuleScoringEngine();
