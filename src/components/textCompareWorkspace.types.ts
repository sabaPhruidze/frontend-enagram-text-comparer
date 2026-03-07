import type { DiffSegment } from "../utils/textDiff";

export type TextCompareWorkspaceMobileProps = {
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

export type EditableWorkspaceProps = Omit<TextCompareWorkspaceMobileProps, "isComparing" | "progressValue">;
export type ComparingWorkspaceProps = Pick<TextCompareWorkspaceMobileProps, "onCompare" | "progressValue">;

export const workspaceSectionClass = "px-4 pb-6 pt-4 md:px-7 md:pb-7 lg:px-5";
