import swapHorizontal from "../assets/swap-horizontal.svg";
import CompareActionButton from "./CompareActionButton";
import CompareTextPanel from "./CompareTextPanel";
import type { EditableWorkspaceProps } from "./textCompareWorkspace.types";
import { workspaceSectionClass } from "./textCompareWorkspace.types";

const TextCompareWorkspaceEditable = ({
  hasCompared,
  isCompareEnabled,
  leftSegments,
  onCompare,
  onSourceTextChange,
  onSwapTexts,
  onTargetTextChange,
  rightSegments,
  sourceText,
  sourceValidationMessage,
  targetText,
  targetValidationMessage,
}: EditableWorkspaceProps) => (
  <section className={workspaceSectionClass}>
    <div className="mx-auto flex w-72 flex-col items-center gap-4 md:w-full md:gap-6 lg:gap-7 min-[1440px]:max-w-[71rem] min-[1440px]:gap-6">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0 lg:items-start min-[1440px]:items-stretch">
        <CompareTextPanel
          hasCompared={hasCompared}
          onTextChange={onSourceTextChange}
          segments={leftSegments}
          textValue={sourceText}
          validationMessage={sourceValidationMessage}
        />
        <button
          className="flex h-12 w-35.5 cursor-pointer items-center justify-center rounded-md text-[#383A48]/60 md:h-108 md:w-13 md:shrink-0 md:rounded-none lg:mx-3.5 lg:h-8 lg:w-8 lg:self-center lg:rounded-sm min-[1440px]:mx-0 min-[1440px]:h-108 min-[1440px]:w-13 min-[1440px]:rounded-none"
          onClick={onSwapTexts}
          type="button"
        >
          <img alt="\u10E2\u10D4\u10E5\u10E1\u10E2\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10EA\u10D5\u10DA\u10D0" className="h-8 w-8 rotate-90 md:rotate-0 lg:h-6 lg:w-6 min-[1440px]:h-8 min-[1440px]:w-8" src={swapHorizontal} />
        </button>
        <CompareTextPanel
          hasCompared={hasCompared}
          onTextChange={onTargetTextChange}
          segments={rightSegments}
          textValue={targetText}
          validationMessage={targetValidationMessage}
        />
      </div>
      <CompareActionButton disabled={!isCompareEnabled} isEnabled={isCompareEnabled} onCompare={onCompare} />
    </div>
  </section>
);

export default TextCompareWorkspaceEditable;
