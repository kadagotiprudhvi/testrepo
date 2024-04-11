// Polarity.js

import Sentiment from 'sentiment';

// Initialize the sentiment analyzer
const sentiment = new Sentiment();

// Function to analyze sentiment of text
export const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);
  
  // Determine sentiment score
  const score = result.score;
  let polarity;
  
  // Classify sentiment based on score
  if (score > 0) {
    polarity = 'positive';
  } else if (score === 0) {
    polarity = 'neutral';
  } else {
    polarity = 'negative';
  }

  return {
    score: score,
    polarity: polarity,
    positiveWords: result.positive,
    negativeWords: result.negative
  };
};
