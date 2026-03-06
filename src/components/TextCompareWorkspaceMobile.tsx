import swapHorizontal from "../assets/swap-horizontal.svg";
import type { DiffSegment } from "../utils/textDiff";
import CompareProgressCard from "./CompareProgressCard";
import CompareTextPanel from "./CompareTextPanel";

type TextCompareWorkspaceMobileProps = {
  hasCompared: boolean;
  isCompareEnabled: boolean;
  isComparing: boolean;
  leftSegments: DiffSegment[];
  onCompare: () => void;
  onSourceTextChange: (value: string) => void;
  onSwapTexts: () => void;
  onTargetTextChange: (value: string) => void;
  progressValue: number;
  rightSegments: DiffSegment[];
  sourceText: string;
  targetText: string;
};

const TextCompareWorkspaceMobile = ({ hasCompared, isCompareEnabled, isComparing, leftSegments, onCompare, onSourceTextChange, onSwapTexts, onTargetTextChange, progressValue, rightSegments, sourceText, targetText }: TextCompareWorkspaceMobileProps) => {
  const compareButtonClass = `h-12 w-35.5 rounded-md px-4 py-2.5 text-sm leading-7 font-normal text-white ${isCompareEnabled ? "cursor-pointer bg-[#466FE8]" : "cursor-not-allowed bg-[#383A4899]"}`;

  if (isComparing) {
    return (
      <section className="px-4 pb-6 pt-4">
        {/* შედარების დროს პროგრეს ბარათი ჩანს */}
        <div className="mx-auto flex w-72 flex-col items-center pt-56">
          <CompareProgressCard progressValue={progressValue} />
          <button className={`${compareButtonClass} mt-36`} disabled onClick={onCompare} type="button">შედარება</button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-6 pt-4">
      <div className="mx-auto flex w-72 flex-col items-center gap-4">
        <CompareTextPanel hasCompared={hasCompared} onTextChange={onSourceTextChange} segments={leftSegments} textValue={sourceText} />
        <button className="flex h-12 w-35.5 cursor-pointer items-center justify-center rounded-md text-[#383A48]/60" onClick={onSwapTexts} type="button">
          <img alt="ტექსტების გაცვლა" className="h-8 w-8 rotate-90" src={swapHorizontal} />
        </button>
        <CompareTextPanel hasCompared={hasCompared} onTextChange={onTargetTextChange} segments={rightSegments} textValue={targetText} />
        <button className={compareButtonClass} disabled={!isCompareEnabled} onClick={onCompare} type="button">შედარება</button>
      </div>
    </section>
  );
};

export default TextCompareWorkspaceMobile;
