import enagramLogo from "../assets/enagram-logo.svg";
import sidebarCollapse from "../assets/sidebar-collapse.svg";
import sidebarOrthography from "../assets/sidebar-orthography.svg";
import sidebarPdfConvert from "../assets/sidebar-pdf-convert.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";
import sidebarTextToVoice from "../assets/sidebar-text-to-voice.svg";
import sidebarVoiceToText from "../assets/sidebar-voice-to-text.svg";
import { TOOL_OPTIONS, type ToolId } from "../constants/toolOptions";

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

const TextCompareDesktopSidebar = ({ onSelectTool, selectedToolId }: TextCompareDesktopSidebarProps) => {
  return (
    <aside className="flex w-60 shrink-0 flex-col bg-[#132450] text-white">
      <div className="flex-1">
        <div className="rounded-br-[1.875rem] px-8 pb-6 pt-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <img alt="Enagram ლოგო" className="h-11 w-10.5" src={enagramLogo} />
              <p className="text-xs font-semibold tracking-[0.12em] text-white">ENAGRAM</p>
            </div>
            <img alt="ჩაკეცვა" className="h-5 w-5 opacity-50" src={sidebarCollapse} />
          </div>

          <div className="mt-11 flex h-13 items-center gap-2 text-sm leading-5 font-normal text-white">
            <img alt="მართლმწერი" className="h-6 w-6 shrink-0" src={sidebarOrthography} />
            <span>მართლმწერი</span>
          </div>
        </div>

        <nav className="mt-1">
          {TOOL_OPTIONS.map((toolOption) => {
            const isSelected = toolOption.id === selectedToolId;
            const sidebarIcon = SIDEBAR_ICONS[toolOption.id];

            return (
              <button
                className={`flex h-13 items-center gap-2 text-left ${
                  isSelected
                    ? "ml-3.25 w-57.5 rounded-l-[1.875rem] bg-white pl-10 pr-3 text-[#132450]"
                    : "w-full cursor-pointer pl-8 pr-4 text-white"
                }`}
                key={toolOption.id}
                onClick={() => onSelectTool(toolOption.id)}
                type="button"
              >
                <img
                  alt={toolOption.label}
                  className={`h-6 w-6 shrink-0 ${!isSelected && toolOption.id === "text-compare" ? "brightness-0 invert" : ""}`}
                  src={sidebarIcon}
                />
                <span className={`text-sm leading-5 tracking-normal ${isSelected ? "font-bold" : "font-normal"}`}>
                  {toolOption.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-[#9EB9FF33] px-3.5">
        <div className="flex h-15 items-center justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white bg-[#9EC8FF] text-sm leading-none font-semibold text-[#132450]">
              თ
            </div>
            <span className="truncate text-sm leading-5 font-normal text-white">თამარ ონიანი</span>
          </div>
          <span className="flex h-6 w-6 items-center justify-center text-lg leading-none text-white">•••</span>
        </div>
      </div>
    </aside>
  );
};

export default TextCompareDesktopSidebar;
