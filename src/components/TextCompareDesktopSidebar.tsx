import sidebarTextCompare from "../assets/sidebar-text-compare.svg";
import toolOrthography from "../assets/tool-orthography.svg";
import toolPdfConvert from "../assets/tool-pdf-convert.svg";
import toolTextToVoice from "../assets/tool-text-to-voice.svg";
import toolVoiceToText from "../assets/tool-voice-to-text.svg";
import { TOOL_OPTIONS, type ToolId } from "../constants/toolOptions";
import DesktopSidebarNav, { type DesktopSidebarItem } from "./DesktopSidebarNav";
import DesktopSidebarTopBlock from "./DesktopSidebarTopBlock";
import DesktopSidebarUserRow from "./DesktopSidebarUserRow";

type TextCompareDesktopSidebarProps = {
  selectedToolId: ToolId;
  onSelectTool: (toolId: ToolId) => void;
};

const SIDEBAR_ICONS: Record<ToolId, string> = {
  orthography: toolOrthography,
  "pdf-convert": toolPdfConvert,
  "text-compare": sidebarTextCompare,
  "text-to-voice": toolTextToVoice,
  "voice-to-text": toolVoiceToText,
};

const SIDEBAR_ITEMS: DesktopSidebarItem[] = TOOL_OPTIONS.map((toolOption) => ({
  iconSrc: SIDEBAR_ICONS[toolOption.id],
  id: toolOption.id,
  label: toolOption.label,
}));

const TextCompareDesktopSidebar = ({ onSelectTool, selectedToolId }: TextCompareDesktopSidebarProps) => (
  <aside className="flex w-[243.2px] shrink-0 flex-col bg-[#132450] text-white">
    <div className="flex-1">
      <DesktopSidebarTopBlock />
      <DesktopSidebarNav items={SIDEBAR_ITEMS} onSelectTool={onSelectTool} selectedToolId={selectedToolId} />
    </div>
    <DesktopSidebarUserRow />
  </aside>
);

export default TextCompareDesktopSidebar;
