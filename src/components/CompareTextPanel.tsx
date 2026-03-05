import type { DiffSegment } from "../utils/textDiff";
import DiffTextView from "./DiffTextView";

type CompareTextPanelProps = {
  hasCompared: boolean;
  onTextChange: (value: string) => void;
  segments: DiffSegment[];
  textValue: string;
};

const CompareTextPanel = ({
  hasCompared,
  onTextChange,
  segments,
  textValue,
}: CompareTextPanelProps) => {
  if (hasCompared) {
    return <DiffTextView placeholder="დაიწერე ტექსტი..." segments={segments} />;
  }

  return (
    <textarea
      className="h-47.5 w-full resize-none rounded-lg bg-[#F0F7FF] p-3 text-sm leading-[1.375rem] text-[#383A48] outline-none placeholder:text-[#8E98A8]"
      onChange={(event) => onTextChange(event.target.value)}
      placeholder="დაიწერე ტექსტი..."
      value={textValue}
    />
  );
};

export default CompareTextPanel;
