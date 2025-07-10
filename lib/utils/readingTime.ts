import { stripHtml } from 'string-strip-html';

export const estimateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const cleanedText = stripHtml(text).result;
  const wordCount = cleanedText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeMinutes;
};
