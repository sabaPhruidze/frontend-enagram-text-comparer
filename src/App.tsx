import { useMemo, useState } from "react";
import DesktopToolsLayout from "./components/DesktopToolsLayout";
import MobileToolsLayout from "./components/MobileToolsLayout";
import TextCompareToolContent from "./components/TextCompareToolContent";
import ToolInProgressState from "./components/ToolInProgressState";
import { TEXT_COMPARE_TOOL_ID, TOOL_OPTIONS, type ToolId } from "./constants/toolOptions";
import useDesktopBreakpoint from "./hooks/useDesktopBreakpoint";
import useTextCompareState from "./hooks/useTextCompareState";

const App = () => {
  const [selectedToolId, setSelectedToolId] = useState<ToolId>(TEXT_COMPARE_TOOL_ID);
  const compareState = useTextCompareState();
  const isDesktop = useDesktopBreakpoint();
  const selectedTool = useMemo(
    () => TOOL_OPTIONS.find((toolOption) => toolOption.id === selectedToolId) ?? TOOL_OPTIONS[0],
    [selectedToolId],
  );
  const mobileTools = useMemo(
    () => TOOL_OPTIONS.filter((toolOption) => toolOption.id !== selectedToolId),
    [selectedToolId],
  );
  const selectedToolContent = selectedToolId === TEXT_COMPARE_TOOL_ID
    ? <TextCompareToolContent compareState={compareState} />
    : <ToolInProgressState toolLabel={selectedTool.label} />;

  return (
    <main className="min-h-screen bg-white font-['Helvetica'] text-[#383A48]">
      {isDesktop ? (
        <DesktopToolsLayout onSelectTool={setSelectedToolId} selectedToolId={selectedToolId}>
          {selectedToolContent}
        </DesktopToolsLayout>
      ) : (
        <MobileToolsLayout onSelectTool={setSelectedToolId} selectedTool={selectedTool} tools={mobileTools}>
          {selectedToolContent}
        </MobileToolsLayout>
      )}
    </main>
  );
};

export default App;
