// semanticSearchEngine.js
// Simulated ElasticSearch-style keyword + fuzzy semantic search engine
// Implements indexing, keyword scoring, fuzzy heuristics, and weighted ranking

import crypto from "crypto";
import fs from "fs";
import path from "path";

export class SemanticSearchEngine {
  constructor() {
    this.indexes = {};
  }

  createIndex(name) {
    if (!this.indexes[name]) {
      this.indexes[name] = [];
      console.log(`[ElasticSim] Index created: ${name}`);
    }
  }

  addDocument(indexName, text) {
    if (!this.indexes[indexName]) this.createIndex(indexName);

    const docId = crypto.randomUUID();
    this.indexes[indexName].push({ id: docId, text });

    console.log(`[ElasticSim] Indexed document ${docId}`);
    return docId;
  }

  _keywordScore(text, keywords) {
    let score = 0;
    keywords.forEach((kw) => {
      if (text.toLowerCase().includes(kw.toLowerCase())) score += 10;
    });
    return Math.min(score, 100);
  }

  _fuzzyScore(text, query) {
    let matches = 0;
    const q = query.toLowerCase().split("");
    const t = text.toLowerCase().split("");

    q.forEach((char) => {
      if (t.includes(char)) matches++;
    });

    return Math.min((matches / q.length) * 100, 100);
  }

  search(indexName, query) {
    if (!this.indexes[indexName]) return [];

    console.log(`[ElasticSim] Performing search for "${query}"...`);

    return this.indexes[indexName]
      .map((doc) => ({
        id: doc.id,
        keywordScore: this._keywordScore(doc.text, query.split(" ")),
        fuzzyScore: this._fuzzyScore(doc.text, query),
      }))
      .map((result) => ({
        ...result,
        combined: Math.round(result.keywordScore * 0.6 + result.fuzzyScore * 0.4),
      }))
      .sort((a, b) => b.combined - a.combined)
      .slice(0, 5);
  }

  dumpIndex(name) {
    return this.indexes[name] || [];
  }
}

export const semanticSearch = new SemanticSearchEngine();
