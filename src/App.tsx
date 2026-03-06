import { useMemo, useState } from "react";
import TextCompareControlsMobile from "./components/TextCompareControlsMobile";
import TextCompareMobileHeader from "./components/TextCompareMobileHeader";
import TextCompareToolsMenu from "./components/TextCompareToolsMenu";
import TextCompareWorkspaceMobile from "./components/TextCompareWorkspaceMobile";
import ToolInProgressState from "./components/ToolInProgressState";
import { TEXT_COMPARE_TOOL_ID, TOOL_OPTIONS, type ToolId } from "./constants/toolOptions";
import useTextCompareState from "./hooks/useTextCompareState";

const App = () => {
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState<ToolId>(TEXT_COMPARE_TOOL_ID);
  const compareState = useTextCompareState();
  const selectedTool = useMemo(() => TOOL_OPTIONS.find((toolOption) => toolOption.id === selectedToolId) ?? TOOL_OPTIONS[0], [selectedToolId]);
  const toolsToShow = useMemo(() => TOOL_OPTIONS.filter((toolOption) => toolOption.id !== selectedToolId), [selectedToolId]);
  const isTextCompareTool = selectedToolId === TEXT_COMPARE_TOOL_ID;

  const handleToolSelect = (toolId: ToolId) => {
    setSelectedToolId(toolId);
    setIsToolsMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-white">
      <TextCompareMobileHeader isMenuOpen={isToolsMenuOpen} onToggleMenu={() => setIsToolsMenuOpen((currentState) => !currentState)} selectedTool={selectedTool} />
      <div className="absolute left-0 top-[7.25rem] z-40 w-full">
        <TextCompareToolsMenu isOpen={isToolsMenuOpen} onSelectTool={handleToolSelect} tools={toolsToShow} />
      </div>

      {isTextCompareTool ? (
        <>
          <TextCompareControlsMobile
            isFormattingPreserved={compareState.isFormattingPreserved}
            isResetEnabled={compareState.isResetEnabled}
            onFormattingPreserveChange={compareState.setIsFormattingPreserved}
            onReset={compareState.handleReset}
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
            targetText={compareState.targetText}
          />
        </>
      ) : (
        <ToolInProgressState toolLabel={selectedTool.label} />
      )}
    </main>
  );
};

export default App;
