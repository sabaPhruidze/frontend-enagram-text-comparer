import TextCompareWorkspaceComparing from "./TextCompareWorkspaceComparing";
import TextCompareWorkspaceEditable from "./TextCompareWorkspaceEditable";
import type { TextCompareWorkspaceMobileProps } from "./textCompareWorkspace.types";

const TextCompareWorkspaceMobile = (props: TextCompareWorkspaceMobileProps) => (
  props.isComparing ? (
    <TextCompareWorkspaceComparing onCompare={props.onCompare} progressValue={props.progressValue} />
  ) : (
    <TextCompareWorkspaceEditable
      hasCompared={props.hasCompared}
      isCompareEnabled={props.isCompareEnabled}
      leftSegments={props.leftSegments}
      onCompare={props.onCompare}
      onSourceTextChange={props.onSourceTextChange}
      onSwapTexts={props.onSwapTexts}
      onTargetTextChange={props.onTargetTextChange}
      rightSegments={props.rightSegments}
      sourceText={props.sourceText}
      sourceValidationMessage={props.sourceValidationMessage}
      targetText={props.targetText}
      targetValidationMessage={props.targetValidationMessage}
    />
  )
);

export default TextCompareWorkspaceMobile;
