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
    <div className="mx-auto flex w-72 flex-col items-center gap-4 lg:w-full lg:gap-7">
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-0">
        <CompareTextPanel
          hasCompared={hasCompared}
          onTextChange={onSourceTextChange}
          segments={leftSegments}
          textValue={sourceText}
          validationMessage={sourceValidationMessage}
        />
        <button
          className="flex h-12 w-35.5 cursor-pointer items-center justify-center rounded-md text-[#383A48]/60 lg:mx-3.5 lg:h-8 lg:w-8 lg:shrink-0 lg:self-center lg:rounded-sm lg:border lg:border-[#132450]"
          onClick={onSwapTexts}
          type="button"
        >
          <img alt="ტექსტების გაცვლა" className="h-8 w-8 rotate-90 lg:h-6 lg:w-6 lg:rotate-0" src={swapHorizontal} />
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
