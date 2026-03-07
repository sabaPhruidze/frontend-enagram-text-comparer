import { useCallback, useMemo, useState } from "react";
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
  const [toolsMenuWidth, setToolsMenuWidth] = useState(0);
  const compareState = useTextCompareState();
  const selectedTool = useMemo(
    () => TOOL_OPTIONS.find((toolOption) => toolOption.id === selectedToolId) ?? TOOL_OPTIONS[0],
    [selectedToolId],
  );
  const toolsToShow = useMemo(
    () => TOOL_OPTIONS.filter((toolOption) => toolOption.id !== selectedToolId),
    [selectedToolId],
  );
  const isTextCompareTool = selectedToolId === TEXT_COMPARE_TOOL_ID;
  const handleToolsMenuToggle = useCallback(
    () => setIsToolsMenuOpen((currentState) => !currentState),
    [],
  );
  const handleToolSelect = useCallback((toolId: ToolId) => {
    setSelectedToolId(toolId);
    setIsToolsMenuOpen(false);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="relative min-h-screen bg-white md:mx-auto md:w-[768px]">
        <TextCompareMobileHeader
          isMenuOpen={isToolsMenuOpen}
          onToggleMenu={handleToolsMenuToggle}
          onTriggerWidthChange={setToolsMenuWidth}
          selectedTool={selectedTool}
        />
        <div
          className="absolute left-5 top-[7.25rem] z-40 md:left-7 md:top-[8.5rem]"
          style={{ width: toolsMenuWidth > 0 ? `${toolsMenuWidth}px` : "auto" }}
        >
          <TextCompareToolsMenu
            isOpen={isToolsMenuOpen}
            onSelectTool={handleToolSelect}
            tools={toolsToShow}
          />
        </div>
        {isTextCompareTool ? (
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
        ) : (
          <ToolInProgressState toolLabel={selectedTool.label} />
        )}
      </div>
    </main>
  );
};

export default App;
