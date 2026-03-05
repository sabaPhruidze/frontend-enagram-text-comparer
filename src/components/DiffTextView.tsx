import type { DiffSegment } from "../utils/textDiff";

type DiffTextViewProps = {
  segments: DiffSegment[];
  placeholder: string;
};

const DiffTextView = ({ segments, placeholder }: DiffTextViewProps) => {
  return (
    <div className="h-47.5 w-full overflow-auto rounded-lg bg-[#F0F7FF] p-3 text-sm leading-[1.375rem] text-[#383A48]">
      {segments.length === 0 ? (
        <span className="text-[#8E98A8]">{placeholder}</span>
      ) : (
        <p className="whitespace-pre-wrap">
          {segments.map((segment, segmentIndex) => (
            <span
              key={`${segment.kind}-${segmentIndex}`}
              className={segment.kind === "equal" ? "text-[#383A48]" : "rounded-[0.125rem] bg-[#6ACF76]"}
            >
              {segment.text}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default DiffTextView;
