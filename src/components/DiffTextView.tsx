import type { DiffSegment } from "../utils/textDiff";

type DiffTextViewProps = {
  segments: DiffSegment[];
  placeholder: string;
};

const DiffTextView = ({ segments, placeholder }: DiffTextViewProps) => {
  return (
    <div className="h-47.5 w-full overflow-auto rounded-lg bg-[#F0F7FF] p-3 text-sm leading-5.5 text-[#383A48] md:h-108 md:p-4 md:text-lg md:leading-[1.625rem] lg:p-3">
      {segments.length === 0 ? (
        <span className="text-[#8E98A8] md:text-[#383A48]/60">{placeholder}</span>
      ) : (
        <p className="whitespace-pre-wrap">
          {segments.map((segment, segmentIndex) => (
            <span
              key={`${segment.kind}-${segmentIndex}`}
              className={segment.kind === "equal" ? "text-[#383A48]" : "rounded-xs bg-[#6ACF76] text-white"}
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
