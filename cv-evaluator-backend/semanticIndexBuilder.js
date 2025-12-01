// semanticIndexBuilder.js
// Simple semantic index with lookup + metadata

import crypto from "crypto";

export class SemanticIndexBuilder {
  constructor() {
    this.index = {};
  }

  addDocument(text) {
    const id = crypto.randomUUID();
    this.index[id] = {
      text,
      added: new Date().toISOString(),
      length: text.length,
    };
    return id;
  }

  getDocument(id) {
    return this.index[id] || null;
  }

  listDocuments() {
    return Object.keys(this.index);
  }

  size() {
    return Object.keys(this.index).length;
  }
}

export const semanticIndex = new SemanticIndexBuilder();
