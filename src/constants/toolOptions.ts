import sidebarTextCompare from "../assets/sidebar-text-compare.svg";
import toolOrthography from "../assets/tool-orthography.svg";
import toolPdfConvert from "../assets/tool-pdf-convert.svg";
import toolTextToVoice from "../assets/tool-text-to-voice.svg";
import toolVoiceToText from "../assets/tool-voice-to-text.svg";

export type ToolId = "orthography" | "text-compare" | "voice-to-text" | "text-to-voice" | "pdf-convert";
export type ToolOption = { id: ToolId; icon: string; label: string };
export const TEXT_COMPARE_TOOL_ID: ToolId = "text-compare";

export const TOOL_OPTIONS: ToolOption[] = [
  { id: "orthography", icon: toolOrthography, label: "მართლმწერი" },
  { id: "text-compare", icon: sidebarTextCompare, label: "ტექსტის შედარება" },
  { id: "voice-to-text", icon: toolVoiceToText, label: "ხმა -> ტექსტი" },
  { id: "text-to-voice", icon: toolTextToVoice, label: "ტექსტი -> ხმა" },
  { id: "pdf-convert", icon: toolPdfConvert, label: "PDF კონვერტაცია" },
];
