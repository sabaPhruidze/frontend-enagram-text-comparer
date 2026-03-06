import { useEffect, useState } from "react";
import { compareTexts, type DiffSegment } from "../utils/textDiff";

type ComparisonStage = "idle" | "loading" | "done";

const normalizeText = (rawText: string) => rawText.replace(/\s+/g, " ").trim();
const prepareTextForCompare = (rawText: string, isFormattingPreserved: boolean) => (isFormattingPreserved ? rawText : normalizeText(rawText));

const useTextCompareState = () => {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [leftSegments, setLeftSegments] = useState<DiffSegment[]>([]);
  const [rightSegments, setRightSegments] = useState<DiffSegment[]>([]);
  const [hasCompared, setHasCompared] = useState(false);
  const [comparisonStage, setComparisonStage] = useState<ComparisonStage>("idle");
  const [progressValue, setProgressValue] = useState(0);
  const [isFormattingPreserved, setIsFormattingPreserved] = useState(false);
  const isCompareReady = sourceText.trim().length > 0 && targetText.trim().length > 0;
  const isComparing = comparisonStage === "loading";
  const isCompareEnabled = isCompareReady && !isComparing;
  const isResetEnabled = comparisonStage !== "idle";

  useEffect(() => {
    if (!isComparing) return;
    const progressTimer = window.setInterval(() => {
      setProgressValue((currentProgress) => {
        const nextProgress = Math.min(currentProgress + 2, 100);
        if (nextProgress < 100) return nextProgress;
        const preparedSource = prepareTextForCompare(sourceText, isFormattingPreserved);
        const preparedTarget = prepareTextForCompare(targetText, isFormattingPreserved);
        const comparedResult = compareTexts(preparedSource, preparedTarget);
        window.clearInterval(progressTimer);
        setLeftSegments(comparedResult.leftSegments);
        setRightSegments(comparedResult.rightSegments);
        setHasCompared(true);
        setComparisonStage("done");
        return 100;
      });
    }, 55);
    return () => window.clearInterval(progressTimer);
  }, [isComparing, isFormattingPreserved, sourceText, targetText]);

  const handleCompare = () => {
    if (!isCompareReady || isComparing) return;
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

  return { handleCompare, handleReset, handleSwapTexts, hasCompared, isCompareEnabled, isComparing, isFormattingPreserved, isResetEnabled, leftSegments, progressValue, rightSegments, setIsFormattingPreserved, setSourceText, setTargetText, sourceText, targetText };
};

export default useTextCompareState;
