import swapHorizontal from "../assets/swap-horizontal.svg";
import type { DiffSegment } from "../utils/textDiff";
import CompareTextPanel from "./CompareTextPanel";

type TextCompareWorkspaceMobileProps = { hasCompared: boolean; leftSegments: DiffSegment[]; onCompare: () => void; onSourceTextChange: (value: string) => void; onSwapTexts: () => void; onTargetTextChange: (value: string) => void; rightSegments: DiffSegment[]; sourceText: string; targetText: string };
type TextCompareWorkspaceMobileActionProps = { isCompareEnabled: boolean };
const TextCompareWorkspaceMobile = ({ hasCompared, isCompareEnabled, leftSegments, onCompare, onSourceTextChange, onSwapTexts, onTargetTextChange, rightSegments, sourceText, targetText }: TextCompareWorkspaceMobileProps & TextCompareWorkspaceMobileActionProps) => {
  return (
    <section className="px-4 pb-6 pt-4">
      {/* შედარების სამუშაო არე: 288px სიგანე, ორი 190px ბლოკი */}
      <div className="mx-auto flex w-72 flex-col items-center gap-4">
        <CompareTextPanel hasCompared={hasCompared} onTextChange={onSourceTextChange} segments={leftSegments} textValue={sourceText} />
        <button
          className="flex h-12 w-35.5 cursor-pointer items-center justify-center rounded-md text-[#383A48]/60"
          onClick={onSwapTexts}
          type="button"
        >
          <img alt="ტექსტების გაცვლა" className="h-8 w-8 rotate-90" src={swapHorizontal} />
        </button>
        <CompareTextPanel hasCompared={hasCompared} onTextChange={onTargetTextChange} segments={rightSegments} textValue={targetText} />
        <button
          className={`h-12 w-35.5 cursor-pointer rounded-md px-4 py-2.5 text-sm leading-7 font-normal text-white ${isCompareEnabled ? "bg-[#466FE8]" : "bg-[#9598A3]"}`}
          disabled={!isCompareEnabled}
          onClick={onCompare}
          type="button"
        >
          შედარება
        </button>
      </div>
    </section>
  );
};

export default TextCompareWorkspaceMobile;
