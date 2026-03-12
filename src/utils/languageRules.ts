import type { LanguageCode } from "../constants/languageOptions";

const georgianLetterPattern = /\p{Script=Georgian}/u;
const englishLetterPattern = /[A-Za-z]/;
const georgianTextPattern = /[^\p{Script=Georgian}\s]/gu;
const englishTextPattern = /[^A-Za-z\s]/g;
const extractLetters = (rawText: string) => rawText.match(/\p{L}/gu) ?? [];

const isLetterAllowedForLanguage = (
  letterValue: string,
  selectedLanguage: LanguageCode,
) => (selectedLanguage === "ka" ? georgianLetterPattern.test(letterValue) : englishLetterPattern.test(letterValue));

export const sanitizeTextByLanguage = (
  rawText: string,
  selectedLanguage: LanguageCode,
) => (selectedLanguage === "ka" ? rawText.replace(georgianTextPattern, "") : rawText.replace(englishTextPattern, ""));

export const normalizeWhitespace = (rawText: string) => rawText.replace(/\s+/g, " ").trim();

export const prepareTextForCompare = (rawText: string, isFormattingPreserved: boolean, selectedLanguage: LanguageCode) => {
  const safeText = sanitizeTextByLanguage(rawText, selectedLanguage);
  return isFormattingPreserved ? safeText : normalizeWhitespace(safeText);
};

export const hasInvalidLettersForLanguage = (
  rawText: string,
  selectedLanguage: LanguageCode,
) => extractLetters(rawText).some((letterValue) => !isLetterAllowedForLanguage(letterValue, selectedLanguage));

export const getLanguageValidationMessage = (rawText: string, selectedLanguage: LanguageCode) => {
  if (!hasInvalidLettersForLanguage(rawText, selectedLanguage)) return "";

  return selectedLanguage === "ka"
    ? "\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8 \u10d4\u10dc\u10d0: \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8\u10d0 \u10d3\u10d0\u10e8\u10d5\u10d4\u10d1\u10e3\u10da\u10d8."
    : "\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8 \u10d4\u10dc\u10d0: \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d8\u10dc\u10d2\u10da\u10d8\u10e1\u10e3\u10e0\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8\u10d0 \u10d3\u10d0\u10e8\u10d5\u10d4\u10d1\u10e3\u10da\u10d8.";
};

export const tokenizeTextByLanguage = (rawText: string, selectedLanguage: LanguageCode) => (
  selectedLanguage === "ka"
    ? rawText.match(/[\p{Script=Georgian}]+|\s+/gu) ?? []
    : rawText.match(/[A-Za-z]+|\s+/g) ?? []
);
