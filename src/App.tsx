import { useState } from "react";
import TextCompareControlsMobile from "./components/TextCompareControlsMobile";
import TextCompareMobileHeader from "./components/TextCompareMobileHeader";
import TextCompareToolsMenu from "./components/TextCompareToolsMenu";
import TextCompareWorkspaceMobile from "./components/TextCompareWorkspaceMobile";
import useTextCompareState from "./hooks/useTextCompareState";

const App = () => {
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const { handleCompare, handleReset, handleSwapTexts, hasCompared, isCompareEnabled, isComparing, isResetEnabled, leftSegments, progressValue, rightSegments, setSourceText, setTargetText, sourceText, targetText } = useTextCompareState();

  return (
    <main className="relative min-h-screen bg-white">
      <TextCompareMobileHeader isMenuOpen={isToolsMenuOpen} onToggleMenu={() => setIsToolsMenuOpen((currentState) => !currentState)} />
      <div className="absolute left-0 top-15 z-30">
        <TextCompareToolsMenu isOpen={isToolsMenuOpen} />
      </div>
      <TextCompareControlsMobile isResetEnabled={isResetEnabled} onReset={handleReset} />
      <TextCompareWorkspaceMobile
        hasCompared={hasCompared}
        isCompareEnabled={isCompareEnabled}
        isComparing={isComparing}
        leftSegments={leftSegments}
        onCompare={handleCompare}
        onSourceTextChange={setSourceText}
        onSwapTexts={handleSwapTexts}
        onTargetTextChange={setTargetText}
        progressValue={progressValue}
        rightSegments={rightSegments}
        sourceText={sourceText}
        targetText={targetText}
      />
    </main>
  );
};

export default App;
