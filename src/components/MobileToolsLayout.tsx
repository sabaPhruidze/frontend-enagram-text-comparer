import { useCallback, useState, type ReactNode } from "react";
import type { ToolId, ToolOption } from "../constants/toolOptions";
import TextCompareMobileHeader from "./TextCompareMobileHeader";
import TextCompareToolsMenu from "./TextCompareToolsMenu";

type MobileToolsLayoutProps = {
  children: ReactNode;
  onSelectTool: (toolId: ToolId) => void;
  selectedTool: ToolOption;
  tools: ToolOption[];
};

const MobileToolsLayout = ({ children, onSelectTool, selectedTool, tools }: MobileToolsLayoutProps) => {
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const [toolsMenuWidth, setToolsMenuWidth] = useState(0);
  const handleToolsMenuToggle = useCallback(() => setIsToolsMenuOpen((currentState) => !currentState), []);
  const handleToolSelect = useCallback((toolId: ToolId) => {
    onSelectTool(toolId);
    setIsToolsMenuOpen(false);
  }, [onSelectTool]);

  return (
    <div className="relative min-h-screen bg-white">
      <TextCompareMobileHeader
        isMenuOpen={isToolsMenuOpen}
        onToggleMenu={handleToolsMenuToggle}
        onTriggerWidthChange={setToolsMenuWidth}
        selectedTool={selectedTool}
      />
      <div
        className="absolute left-5 top-29 z-40 md:left-7 md:top-30"
        style={{ width: toolsMenuWidth > 0 ? `${toolsMenuWidth}px` : "auto" }}
      >
        <TextCompareToolsMenu isOpen={isToolsMenuOpen} onSelectTool={handleToolSelect} tools={tools} />
      </div>
      {children}
    </div>
  );
};

export default MobileToolsLayout;
