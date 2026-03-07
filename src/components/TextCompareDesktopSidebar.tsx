import sidebarPdfConvert from "../assets/sidebar-pdf-convert.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";
import sidebarTextToVoice from "../assets/sidebar-text-to-voice.svg";
import sidebarVoiceToText from "../assets/sidebar-voice-to-text.svg";
import { TOOL_OPTIONS, type ToolId } from "../constants/toolOptions";
import DesktopSidebarNav, { type DesktopSidebarItem } from "./DesktopSidebarNav";
import DesktopSidebarTopBlock from "./DesktopSidebarTopBlock";
import DesktopSidebarUserRow from "./DesktopSidebarUserRow";

type TextCompareDesktopSidebarProps = {
  selectedToolId: ToolId;
  onSelectTool: (toolId: ToolId) => void;
};

const SIDEBAR_ICONS: Record<ToolId, string> = {
  "pdf-convert": sidebarPdfConvert,
  "text-compare": sidebarTextCompare,
  "text-to-voice": sidebarTextToVoice,
  "voice-to-text": sidebarVoiceToText,
};

const SIDEBAR_ITEMS: DesktopSidebarItem[] = TOOL_OPTIONS.map((toolOption) => ({
  iconSrc: SIDEBAR_ICONS[toolOption.id],
  id: toolOption.id,
  label: toolOption.label,
}));

const TextCompareDesktopSidebar = ({ onSelectTool, selectedToolId }: TextCompareDesktopSidebarProps) => (
  <aside className="flex w-60 shrink-0 flex-col bg-[#132450] text-white">
    <div className="flex-1">
      <DesktopSidebarTopBlock />
      <DesktopSidebarNav items={SIDEBAR_ITEMS} onSelectTool={onSelectTool} selectedToolId={selectedToolId} />
    </div>
    <DesktopSidebarUserRow />
  </aside>
);

export default TextCompareDesktopSidebar;
