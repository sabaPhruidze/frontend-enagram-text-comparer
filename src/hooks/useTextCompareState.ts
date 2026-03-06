import { useEffect, useMemo, useState } from "react";
import type { LanguageCode } from "../constants/languageOptions";
import { compareTexts, type DiffSegment } from "../utils/textDiff";

type ComparisonStage = "idle" | "loading" | "done";

const sanitizeTextByLanguage = (rawText: string, selectedLanguage: LanguageCode) => (selectedLanguage === "ka" ? rawText.replace(/[^\p{Script=Georgian}\s]/gu, "") : rawText.replace(/[^A-Za-z\s]/g, ""));
const normalizeText = (rawText: string) => rawText.replace(/\s+/g, " ").trim();
const isLetterAllowedForLanguage = (letterValue: string, selectedLanguage: LanguageCode) => (selectedLanguage === "ka" ? /\p{Script=Georgian}/u.test(letterValue) : /[A-Za-z]/.test(letterValue));
const hasInvalidLetters = (rawText: string, selectedLanguage: LanguageCode) => (rawText.match(/\p{L}/gu) ?? []).some((letterValue) => !isLetterAllowedForLanguage(letterValue, selectedLanguage));
const prepareTextForCompare = (rawText: string, isFormattingPreserved: boolean, selectedLanguage: LanguageCode) => {
  const safeText = sanitizeTextByLanguage(rawText, selectedLanguage);
  return isFormattingPreserved ? safeText : normalizeText(safeText);
};

const useTextCompareState = () => {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [leftSegments, setLeftSegments] = useState<DiffSegment[]>([]);
  const [rightSegments, setRightSegments] = useState<DiffSegment[]>([]);
  const [hasCompared, setHasCompared] = useState(false);
  const [comparisonStage, setComparisonStage] = useState<ComparisonStage>("idle");
  const [progressValue, setProgressValue] = useState(0);
  const [isFormattingPreserved, setIsFormattingPreserved] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("ka");
  const sourceValidationMessage = useMemo(() => (hasInvalidLetters(sourceText, selectedLanguage) ? selectedLanguage === "ka" ? "არასწორი ენა: მხოლოდ ქართული ასოებია დაშვებული." : "Wrong language: only English letters are allowed." : ""), [selectedLanguage, sourceText]);
  const targetValidationMessage = useMemo(() => (hasInvalidLetters(targetText, selectedLanguage) ? selectedLanguage === "ka" ? "არასწორი ენა: მხოლოდ ქართული ასოებია დაშვებული." : "Wrong language: only English letters are allowed." : ""), [selectedLanguage, targetText]);
  const hasSourceContent = sanitizeTextByLanguage(sourceText, selectedLanguage).trim().length > 0;
  const hasTargetContent = sanitizeTextByLanguage(targetText, selectedLanguage).trim().length > 0;
  const isComparing = comparisonStage === "loading";
  const isCompareEnabled = hasSourceContent && hasTargetContent && !sourceValidationMessage && !targetValidationMessage && !isComparing;
  const isResetEnabled = comparisonStage !== "idle";

  useEffect(() => {
    if (!isComparing) return;
    const progressTimer = window.setInterval(() => {
      setProgressValue((currentProgress) => {
        const nextProgress = Math.min(currentProgress + 2, 100);
        if (nextProgress < 100) return nextProgress;
        const preparedSource = prepareTextForCompare(sourceText, isFormattingPreserved, selectedLanguage);
        const preparedTarget = prepareTextForCompare(targetText, isFormattingPreserved, selectedLanguage);
        const comparedResult = compareTexts(preparedSource, preparedTarget, selectedLanguage);
        window.clearInterval(progressTimer);
        setLeftSegments(comparedResult.leftSegments);
        setRightSegments(comparedResult.rightSegments);
        setHasCompared(true);
        setComparisonStage("done");
        return 100;
      });
    }, 55);
    return () => window.clearInterval(progressTimer);
  }, [isComparing, isFormattingPreserved, selectedLanguage, sourceText, targetText]);

  const handleCompare = () => {
    if (!isCompareEnabled || isComparing) return;
    setHasCompared(false);
    setProgressValue(0);
    setComparisonStage("loading");
  };
  const handleReset = () => {
    if (!isResetEnabled) return;
    setSourceText("");
    setTargetText("");
    setLeftSegments([]);
    setRightSegments([]);
    setHasCompared(false);
    setProgressValue(0);
    setComparisonStage("idle");
  };
  const handleSwapTexts = () => {
    setSourceText(targetText);
    setTargetText(sourceText);
    setHasCompared(false);
    setLeftSegments([]);
    setRightSegments([]);
    setComparisonStage("idle");
    setProgressValue(0);
  };
  const handleLanguageChange = (languageCode: LanguageCode) => {
    setSelectedLanguage(languageCode);
    setHasCompared(false);
    setLeftSegments([]);
    setRightSegments([]);
    setComparisonStage("idle");
    setProgressValue(0);
  };

  return { handleCompare, handleLanguageChange, handleReset, handleSwapTexts, hasCompared, isCompareEnabled, isComparing, isFormattingPreserved, isResetEnabled, leftSegments, progressValue, rightSegments, selectedLanguage, setIsFormattingPreserved, setSourceText, setTargetText, sourceText, sourceValidationMessage, targetText, targetValidationMessage };
};

export default useTextCompareState;
