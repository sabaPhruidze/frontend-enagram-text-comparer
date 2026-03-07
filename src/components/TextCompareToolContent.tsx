import type { TextCompareState } from "../hooks/useTextCompareState";
import TextCompareControlsMobile from "./TextCompareControlsMobile";
import TextCompareWorkspaceMobile from "./TextCompareWorkspaceMobile";

type TextCompareToolContentProps = {
  compareState: TextCompareState;
};

const TextCompareToolContent = ({ compareState }: TextCompareToolContentProps) => (
  <>
    <TextCompareControlsMobile
      isFormattingPreserved={compareState.isFormattingPreserved}
      isResetEnabled={compareState.isResetEnabled}
      onFormattingPreserveChange={compareState.setIsFormattingPreserved}
      onLanguageChange={compareState.handleLanguageChange}
      onReset={compareState.handleReset}
      selectedLanguage={compareState.selectedLanguage}
    />
    <TextCompareWorkspaceMobile
      hasCompared={compareState.hasCompared}
      isCompareEnabled={compareState.isCompareEnabled}
      isComparing={compareState.isComparing}
      leftSegments={compareState.leftSegments}
      onCompare={compareState.handleCompare}
      onSourceTextChange={compareState.setSourceText}
      onSwapTexts={compareState.handleSwapTexts}
      onTargetTextChange={compareState.setTargetText}
      progressValue={compareState.progressValue}
      rightSegments={compareState.rightSegments}
      sourceText={compareState.sourceText}
      sourceValidationMessage={compareState.sourceValidationMessage}
      targetText={compareState.targetText}
      targetValidationMessage={compareState.targetValidationMessage}
    />
  </>
);

export default TextCompareToolContent;
