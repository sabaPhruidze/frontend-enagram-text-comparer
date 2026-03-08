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
    <div className="mx-auto flex h-[652px] w-72 flex-col items-center gap-4 md:w-full md:gap-6 lg:max-w-[71rem] lg:gap-6">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0 lg:items-stretch">
        <CompareTextPanel
          hasCompared={hasCompared}
          onTextChange={onSourceTextChange}
          segments={leftSegments}
          textValue={sourceText}
          validationMessage={sourceValidationMessage}
        />
        <button
          className="flex h-12 w-35.5 cursor-pointer items-center justify-center rounded-md text-[#383A48]/60 md:h-108 md:w-13 md:shrink-0 md:rounded-none"
          onClick={onSwapTexts}
          type="button"
        >
          <img alt="\u10E2\u10D4\u10E5\u10E1\u10E2\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10EA\u10D5\u10DA\u10D0" className="h-8 w-8 rotate-90 md:rotate-0" src={swapHorizontal} />
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
