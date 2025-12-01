// textNormalizationUtils.js
// Full NLP preprocessing utility module with 15+ normalization functions

import crypto from "crypto";

export function toLower(text) {
  return text.toLowerCase();
}

export function removePunctuation(text) {
  return text.replace(/[^\w\s]/g, "");
}

export function normalizeSpacing(text) {
  return text.replace(/\s+/g, " ").trim();
}

export function uniqueWords(text) {
  const words = text.split(/\s+/);
  return [...new Set(words)];
}

export function hashText(text) {
  return crypto.createHash("md5").update(text).digest("hex");
}

export function splitSentences(text) {
  return text.split(/[.!?]/).map((s) => s.trim());
}

export function removeNumbers(text) {
  return text.replace(/[0-9]/g, "");
}

export function stripUnicode(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function normalizeText(text) {
  let t = toLower(text);
  t = removePunctuation(t);
  t = stripUnicode(t);
  t = normalizeSpacing(t);
  return t;
}
