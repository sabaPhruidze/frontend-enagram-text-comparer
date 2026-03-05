import { useState } from "react";
import TextCompareMobileHeader from "./components/TextCompareMobileHeader";
import TextCompareControlsMobile from "./components/TextCompareControlsMobile";
import TextCompareToolsMenu from "./components/TextCompareToolsMenu";
import TextCompareWorkspaceMobile from "./components/TextCompareWorkspaceMobile";
import { compareTexts, type DiffSegment } from "./utils/textDiff";

const App = () => {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [leftSegments, setLeftSegments] = useState<DiffSegment[]>([]);
  const [rightSegments, setRightSegments] = useState<DiffSegment[]>([]);
  const [hasCompared, setHasCompared] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const isCompareEnabled = sourceText.trim().length > 0 && targetText.trim().length > 0;

  const handleCompare = () => {
    if (!isCompareEnabled) return;
    const { leftSegments: nextLeftSegments, rightSegments: nextRightSegments } = compareTexts(sourceText, targetText);
    setLeftSegments(nextLeftSegments);
    setRightSegments(nextRightSegments);
    setHasCompared(true);
  };

  const handleReset = () => {
    setSourceText("");
    setTargetText("");
    setLeftSegments([]);
    setRightSegments([]);
    setHasCompared(false);
  };

  const handleSwapTexts = () => {
    setSourceText(targetText);
    setTargetText(sourceText);
    setHasCompared(false);
  };

  return (
    <main className="relative min-h-screen bg-[#F3F3F4]">
      <TextCompareMobileHeader isMenuOpen={isToolsMenuOpen} onToggleMenu={() => setIsToolsMenuOpen((currentState) => !currentState)} />
      <div className="absolute left-0 top-15 z-30">
        <TextCompareToolsMenu isOpen={isToolsMenuOpen} />
      </div>
      <TextCompareControlsMobile onReset={handleReset} />
      <TextCompareWorkspaceMobile
        hasCompared={hasCompared}
        isCompareEnabled={isCompareEnabled}
        leftSegments={leftSegments}
        onCompare={handleCompare}
        onSourceTextChange={setSourceText}
        onSwapTexts={handleSwapTexts}
        onTargetTextChange={setTargetText}
        rightSegments={rightSegments}
        sourceText={sourceText}
        targetText={targetText}
      />
    </main>
  );
};

export default App;
