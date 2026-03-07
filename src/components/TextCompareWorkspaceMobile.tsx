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
  sourceValidationMessage: string;
  targetText: string;
  targetValidationMessage: string;
};

const TextCompareWorkspaceMobile = ({ hasCompared, isCompareEnabled, isComparing, leftSegments, onCompare, onSourceTextChange, onSwapTexts, onTargetTextChange, progressValue, rightSegments, sourceText, sourceValidationMessage, targetText, targetValidationMessage }: TextCompareWorkspaceMobileProps) => {
  const compareButtonClass = `h-12 w-35.5 rounded-md px-4 py-2.5 text-sm leading-7 font-normal text-white md:mx-auto md:rounded-[8px] ${isCompareEnabled ? "cursor-pointer bg-[#466FE8]" : "cursor-not-allowed bg-[#383A4899]"}`;
  if (isComparing) {
    return (
      <section className="px-4 pb-6 pt-4 md:px-7 md:pb-7">
        <div className="mx-auto flex w-72 flex-col items-center pt-56 md:w-[712px] md:pt-40">
          <CompareProgressCard progressValue={progressValue} />
          <button className={`${compareButtonClass} mt-36`} disabled onClick={onCompare} type="button">შედარება</button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-6 pt-4 md:px-7 md:pb-7">
      <div className="mx-auto flex w-72 flex-col items-center gap-4 md:w-[712px] md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-x-0 md:gap-y-6">
        <CompareTextPanel hasCompared={hasCompared} onTextChange={onSourceTextChange} segments={leftSegments} textValue={sourceText} validationMessage={sourceValidationMessage} />
        <button className="flex h-12 w-35.5 cursor-pointer items-center justify-center rounded-md text-[#383A48]/60 md:h-108 md:w-[52px] md:rounded-none md:[&_img]:rotate-0" onClick={onSwapTexts} type="button">
          <img alt="ტექსტების გაცვლა" className="h-8 w-8 rotate-90" src={swapHorizontal} />
        </button>
        <CompareTextPanel hasCompared={hasCompared} onTextChange={onTargetTextChange} segments={rightSegments} textValue={targetText} validationMessage={targetValidationMessage} />
        <button className={compareButtonClass} disabled={!isCompareEnabled} onClick={onCompare} type="button">შედარება</button>
      </div>
    </section>
  );
};

export default TextCompareWorkspaceMobile;
