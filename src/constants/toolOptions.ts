import sidebarPdfConvert from "../assets/sidebar-pdf-convert.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";
import sidebarTextToVoice from "../assets/sidebar-text-to-voice.svg";
import sidebarVoiceToText from "../assets/sidebar-voice-to-text.svg";

export type ToolId = "text-compare" | "voice-to-text" | "text-to-voice" | "pdf-convert";

export type ToolOption = {
  id: ToolId;
  icon: string;
  label: string;
};

export const TEXT_COMPARE_TOOL_ID: ToolId = "text-compare";

export const TOOL_OPTIONS: ToolOption[] = [
  { id: "text-compare", icon: sidebarTextCompare, label: "ტექსტის შედარება" },
  { id: "voice-to-text", icon: sidebarVoiceToText, label: "ხმა -> ტექსტი" },
  { id: "text-to-voice", icon: sidebarTextToVoice, label: "ტექსტი -> ხმა" },
  { id: "pdf-convert", icon: sidebarPdfConvert, label: "PDF კონვერტაცია" },
];
