import type { ReactNode } from "react";
import type { ToolId } from "../constants/toolOptions";
import TextCompareDesktopSidebar from "./TextCompareDesktopSidebar";

type DesktopToolsLayoutProps = {
  children: ReactNode;
  onSelectTool: (toolId: ToolId) => void;
  selectedToolId: ToolId;
};

const DesktopToolsLayout = ({ children, onSelectTool, selectedToolId }: DesktopToolsLayoutProps) => (
  <div className="flex min-h-screen w-full bg-white">
    <TextCompareDesktopSidebar onSelectTool={onSelectTool} selectedToolId={selectedToolId} />
    <div className="min-w-0 flex-1 bg-white">{children}</div>
  </div>
);

export default DesktopToolsLayout;
