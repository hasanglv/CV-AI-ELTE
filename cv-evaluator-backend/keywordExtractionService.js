// keywordExtractionService.js
// Hybrid statistical + heuristic keyword extraction

export function frequencyMap(text) {
  const words = text.toLowerCase().split(/\s+/);
  const map = {};

  words.forEach((w) => (map[w] = (map[w] || 0) + 1));
  return map;
}

export function mostFrequentWords(text, count = 10) {
  const freq = frequencyMap(text);
  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, count);
}

export function extractTechnicalTerms(text) {
  const tech = ["java", "javascript", "react", "cloud", "api", "docker"];
  return tech.filter((t) => text.toLowerCase().includes(t));
}

export function extractSummary(text) {
  return text.split(/[.!?]/)[0].slice(0, 140);
}
