import type { DiffSegment } from "../utils/textDiff";
import DiffTextView from "./DiffTextView";

type CompareTextPanelProps = {
  hasCompared: boolean;
  onTextChange: (value: string) => void;
  segments: DiffSegment[];
  textValue: string;
  validationMessage?: string;
};

const CompareTextPanel = ({ hasCompared, onTextChange, segments, textValue, validationMessage }: CompareTextPanelProps) => {
  if (hasCompared) return <DiffTextView placeholder="\u10D3\u10D0\u10D8\u10EC\u10D4\u10E0\u10D4 \u10E2\u10D4\u10E5\u10E1\u10E2\u10D8..." segments={segments} />;

  return (
    <div className="w-full md:flex-1 md:min-w-0 lg:basis-0">
      <textarea
        className="h-47.5 w-full resize-none rounded-lg bg-[#F0F7FF] p-3 text-sm leading-5.5 text-[#383A48] outline-none placeholder:text-[#8E98A8] md:h-108 md:p-4 md:text-lg md:leading-[1.625rem] md:placeholder:text-[#383A48]/60 lg:p-3"
        onChange={(event) => onTextChange(event.target.value)}
        placeholder="\u10D3\u10D0\u10D8\u10EC\u10D4\u10E0\u10D4 \u10E2\u10D4\u10E5\u10E1\u10E2\u10D8..."
        value={textValue}
      />
      {validationMessage ? <p className="mt-1 text-xs leading-4 font-normal text-[#D3162B]">{validationMessage}</p> : null}
    </div>
  );
};

export default CompareTextPanel;
