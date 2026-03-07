import enagramLogo from "../assets/enagram-logo.svg";
import menuEllipsis from "../assets/menu-ellipsis.svg";
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
        <div className="rounded-br-[1.875rem] bg-[#132450] px-8 pb-7 pt-10">
          <div className="mb-14 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <img alt="Enagram ლოგო" className="h-11 w-11" src={enagramLogo} />
              <p className="text-xs font-semibold tracking-[0.12em] text-white">ENAGRAM</p>
            </div>
            <img alt="ჩაკეცვა" className="h-5 w-5" src={sidebarCollapse} />
          </div>

          <div className="flex h-13 items-center gap-2 text-sm leading-5 font-normal text-white">
            <img alt="მართლმწერი" className="h-6 w-6 shrink-0" src={sidebarOrthography} />
            <span>მართლმწერი</span>
          </div>
        </div>

        <nav className="pr-2">
          {TOOL_OPTIONS.map((toolOption) => {
            const isSelected = toolOption.id === selectedToolId;
            const sidebarIcon = SIDEBAR_ICONS[toolOption.id];

            return (
              <button
                className={`flex h-13 w-full items-center gap-2 pl-4 pr-6 text-left ${
                  isSelected
                    ? "rounded-r-[1.875rem] bg-white text-[#132450]"
                    : "cursor-pointer text-white"
                }`}
                key={toolOption.id}
                onClick={() => onSelectTool(toolOption.id)}
                type="button"
              >
                <img
                  alt={toolOption.label}
                  className={`h-6 w-6 shrink-0 ${
                    !isSelected && toolOption.id === "text-compare" ? "brightness-0 invert" : ""
                  }`}
                  src={sidebarIcon}
                />
                <span className={`text-sm leading-5 ${isSelected ? "font-bold" : "font-normal"}`}>
                  {toolOption.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex h-20 items-center justify-between border-t border-[#FFFFFF1A] px-3 text-sm leading-5 font-normal text-white">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#6EA5FF] text-[0.5rem] leading-none text-[#132450]">
            თ
          </div>
          <span className="truncate">თამარ ინანი</span>
        </div>
        <img alt="მეტი" className="h-6 w-6 shrink-0" src={menuEllipsis} />
      </div>
    </aside>
  );
};

export default TextCompareDesktopSidebar;
