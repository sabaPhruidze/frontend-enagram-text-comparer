import type { LanguageCode } from "../constants/languageOptions";
import { tokenizeTextByLanguage } from "./languageRules";

export type DiffKind = "equal" | "add" | "remove";
export type DiffSegment = { kind: DiffKind; text: string };
type DiffResult = { leftSegments: DiffSegment[]; rightSegments: DiffSegment[] };

const mergeSegments = (segments: DiffSegment[]) => segments.reduce<DiffSegment[]>((mergedSegments, currentSegment) => {
  const lastSegment = mergedSegments.at(-1);
  if (!lastSegment || lastSegment.kind !== currentSegment.kind) {
    mergedSegments.push(currentSegment);
    return mergedSegments;
  }
  lastSegment.text += currentSegment.text;
  return mergedSegments;
}, []);

const buildLcsTable = (sourceTokens: string[], targetTokens: string[]) => {
  const lcsTable = Array.from({ length: sourceTokens.length + 1 }, () => Array<number>(targetTokens.length + 1).fill(0));
  for (let sourceIndex = sourceTokens.length - 1; sourceIndex >= 0; sourceIndex -= 1) {
    for (let targetIndex = targetTokens.length - 1; targetIndex >= 0; targetIndex -= 1) {
      if (sourceTokens[sourceIndex] === targetTokens[targetIndex]) {
        lcsTable[sourceIndex][targetIndex] = lcsTable[sourceIndex + 1][targetIndex + 1] + 1;
        continue;
      }
      lcsTable[sourceIndex][targetIndex] = Math.max(lcsTable[sourceIndex + 1][targetIndex], lcsTable[sourceIndex][targetIndex + 1]);
    }
  }
  return lcsTable;
};

export const compareTexts = (sourceText: string, targetText: string, selectedLanguage: LanguageCode): DiffResult => {
  if (sourceText === targetText) {
    return { leftSegments: [{ kind: "equal", text: sourceText }], rightSegments: [{ kind: "equal", text: targetText }] };
  }

  const sourceTokens = tokenizeTextByLanguage(sourceText, selectedLanguage);
  const targetTokens = tokenizeTextByLanguage(targetText, selectedLanguage);
  const lcsTable = buildLcsTable(sourceTokens, targetTokens);
  const leftSegments: DiffSegment[] = [];
  const rightSegments: DiffSegment[] = [];
  let sourceIndex = 0;
  let targetIndex = 0;

  while (sourceIndex < sourceTokens.length || targetIndex < targetTokens.length) {
    if (sourceIndex < sourceTokens.length && targetIndex < targetTokens.length && sourceTokens[sourceIndex] === targetTokens[targetIndex]) {
      leftSegments.push({ kind: "equal", text: sourceTokens[sourceIndex] });
      rightSegments.push({ kind: "equal", text: targetTokens[targetIndex] });
      sourceIndex += 1;
      targetIndex += 1;
      continue;
    }
    if (sourceIndex < sourceTokens.length && (targetIndex === targetTokens.length || lcsTable[sourceIndex + 1][targetIndex] >= lcsTable[sourceIndex][targetIndex + 1])) {
      leftSegments.push({ kind: "remove", text: sourceTokens[sourceIndex] });
      sourceIndex += 1;
      continue;
    }
    if (targetIndex < targetTokens.length) {
      rightSegments.push({ kind: "add", text: targetTokens[targetIndex] });
      targetIndex += 1;
    }
  }

  return { leftSegments: mergeSegments(leftSegments), rightSegments: mergeSegments(rightSegments) };
};
