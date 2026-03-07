import { useCallback, useEffect, useMemo, useState } from "react";
import TextCompareControlsMobile from "./components/TextCompareControlsMobile";
import TextCompareDesktopSidebar from "./components/TextCompareDesktopSidebar";
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
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktopBreakpointChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    desktopMediaQuery.addEventListener("change", handleDesktopBreakpointChange);
    return () => desktopMediaQuery.removeEventListener("change", handleDesktopBreakpointChange);
  }, []);
  const selectedToolContent = isTextCompareTool ? (
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
  );

  if (isDesktop) {
    return (
      <main className="min-h-screen bg-white">
        <div className="flex min-h-screen w-full bg-white">
          <TextCompareDesktopSidebar
            onSelectTool={handleToolSelect}
            selectedToolId={selectedToolId}
          />
          <div className="min-w-0 flex-1 bg-white">
            {selectedToolContent}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="relative min-h-screen bg-white">
        <TextCompareMobileHeader
          isMenuOpen={isToolsMenuOpen}
          onToggleMenu={handleToolsMenuToggle}
          onTriggerWidthChange={setToolsMenuWidth}
          selectedTool={selectedTool}
        />
        <div
          className="absolute left-5 top-29 z-40 md:left-7 md:top-34"
          style={{ width: toolsMenuWidth > 0 ? `${toolsMenuWidth}px` : "auto" }}
        >
          <TextCompareToolsMenu
            isOpen={isToolsMenuOpen}
            onSelectTool={handleToolSelect}
            tools={toolsToShow}
          />
        </div>
        {selectedToolContent}
      </div>
    </main>
  );
};

export default App;
