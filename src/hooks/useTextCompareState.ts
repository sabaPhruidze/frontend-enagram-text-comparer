import { useCallback, useEffect, useMemo, useState } from "react";
import type { LanguageCode } from "../constants/languageOptions";
import { getLanguageValidationMessage, prepareTextForCompare, sanitizeTextByLanguage } from "../utils/languageRules";
import { compareTexts, type DiffSegment } from "../utils/textDiff";

type ComparisonStage = "idle" | "loading" | "done";

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

  const sourceValidationMessage = useMemo(
    () => getLanguageValidationMessage(sourceText, selectedLanguage),
    [selectedLanguage, sourceText],
  );
  const targetValidationMessage = useMemo(
    () => getLanguageValidationMessage(targetText, selectedLanguage),
    [selectedLanguage, targetText],
  );
  const hasSourceContent = useMemo(
    () => sanitizeTextByLanguage(sourceText, selectedLanguage).trim().length > 0,
    [selectedLanguage, sourceText],
  );
  const hasTargetContent = useMemo(
    () => sanitizeTextByLanguage(targetText, selectedLanguage).trim().length > 0,
    [selectedLanguage, targetText],
  );
  const isComparing = comparisonStage === "loading";
  const isCompareEnabled =
    hasSourceContent &&
    hasTargetContent &&
    !sourceValidationMessage &&
    !targetValidationMessage &&
    !isComparing;
  const isResetEnabled = comparisonStage !== "idle";

  useEffect(() => {
    if (!isComparing) return;
    const progressTimer = window.setInterval(() => {
      setProgressValue((currentProgress) => {
        const nextProgress = Math.min(currentProgress + 2, 100);
        if (nextProgress < 100) return nextProgress;
        setHasCompared(true);
        setComparisonStage("done");
        window.clearInterval(progressTimer);
        return 100;
      });
    }, 55);
    return () => window.clearInterval(progressTimer);
  }, [isComparing]);

  const resetComparisonState = useCallback(() => {
    setHasCompared(false);
    setLeftSegments([]);
    setRightSegments([]);
    setComparisonStage("idle");
    setProgressValue(0);
  }, []);

  const handleCompare = useCallback(() => {
    if (!isCompareEnabled || isComparing) return;
    const preparedSource = prepareTextForCompare(sourceText, isFormattingPreserved, selectedLanguage);
    const preparedTarget = prepareTextForCompare(targetText, isFormattingPreserved, selectedLanguage);
    const comparedResult = compareTexts(preparedSource, preparedTarget, selectedLanguage);
    setLeftSegments(comparedResult.leftSegments);
    setRightSegments(comparedResult.rightSegments);
    setHasCompared(false);
    setProgressValue(0);
    setComparisonStage("loading");
  }, [isCompareEnabled, isComparing, isFormattingPreserved, selectedLanguage, sourceText, targetText]);

  const handleReset = useCallback(() => {
    if (!isResetEnabled) return;
    setSourceText("");
    setTargetText("");
    resetComparisonState();
  }, [isResetEnabled, resetComparisonState]);

  const handleSwapTexts = useCallback(() => {
    setSourceText(targetText);
    setTargetText(sourceText);
    resetComparisonState();
  }, [resetComparisonState, sourceText, targetText]);

  const handleLanguageChange = useCallback(
    (languageCode: LanguageCode) => {
      setSelectedLanguage(languageCode);
      resetComparisonState();
    },
    [resetComparisonState],
  );

  return {
    handleCompare,
    handleLanguageChange,
    handleReset,
    handleSwapTexts,
    hasCompared,
    isCompareEnabled,
    isComparing,
    isFormattingPreserved,
    isResetEnabled,
    leftSegments,
    progressValue,
    rightSegments,
    selectedLanguage,
    setIsFormattingPreserved,
    setSourceText,
    setTargetText,
    sourceText,
    sourceValidationMessage,
    targetText,
    targetValidationMessage,
  };
};

export default useTextCompareState;
