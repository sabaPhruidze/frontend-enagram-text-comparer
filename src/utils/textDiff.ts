export type DiffKind = "equal" | "add" | "remove";
export type DiffSegment = { kind: DiffKind; text: string };

type DiffResult = { leftSegments: DiffSegment[]; rightSegments: DiffSegment[] };

const mergeSegments = (segments: DiffSegment[]) => {
  return segments.reduce<DiffSegment[]>((mergedSegments, currentSegment) => {
    const lastSegment = mergedSegments.at(-1);
    if (!lastSegment || lastSegment.kind !== currentSegment.kind) {
      mergedSegments.push(currentSegment);
      return mergedSegments;
    }

    lastSegment.text += currentSegment.text;
    return mergedSegments;
  }, []);
};

const buildLcsTable = (sourceChars: string[], targetChars: string[]) => {
  const lcsTable = Array.from({ length: sourceChars.length + 1 }, () =>
    Array<number>(targetChars.length + 1).fill(0),
  );

  for (let sourceIndex = sourceChars.length - 1; sourceIndex >= 0; sourceIndex -= 1) {
    for (let targetIndex = targetChars.length - 1; targetIndex >= 0; targetIndex -= 1) {
      if (sourceChars[sourceIndex] === targetChars[targetIndex]) {
        lcsTable[sourceIndex][targetIndex] = lcsTable[sourceIndex + 1][targetIndex + 1] + 1;
        continue;
      }

      lcsTable[sourceIndex][targetIndex] = Math.max(
        lcsTable[sourceIndex + 1][targetIndex],
        lcsTable[sourceIndex][targetIndex + 1],
      );
    }
  }

  return lcsTable;
};

export const compareTexts = (sourceText: string, targetText: string): DiffResult => {
  const sourceChars = Array.from(sourceText);
  const targetChars = Array.from(targetText);
  const lcsTable = buildLcsTable(sourceChars, targetChars);
  const leftSegments: DiffSegment[] = [];
  const rightSegments: DiffSegment[] = [];
  let sourceIndex = 0;
  let targetIndex = 0;

  while (sourceIndex < sourceChars.length || targetIndex < targetChars.length) {
    if (
      sourceIndex < sourceChars.length &&
      targetIndex < targetChars.length &&
      sourceChars[sourceIndex] === targetChars[targetIndex]
    ) {
      leftSegments.push({ kind: "equal", text: sourceChars[sourceIndex] });
      rightSegments.push({ kind: "equal", text: targetChars[targetIndex] });
      sourceIndex += 1;
      targetIndex += 1;
      continue;
    }

    if (
      sourceIndex < sourceChars.length &&
      (targetIndex === targetChars.length ||
        lcsTable[sourceIndex + 1][targetIndex] >= lcsTable[sourceIndex][targetIndex + 1])
    ) {
      leftSegments.push({ kind: "remove", text: sourceChars[sourceIndex] });
      sourceIndex += 1;
      continue;
    }

    if (targetIndex < targetChars.length) {
      rightSegments.push({ kind: "add", text: targetChars[targetIndex] });
      targetIndex += 1;
    }
  }

  return {
    leftSegments: mergeSegments(leftSegments),
    rightSegments: mergeSegments(rightSegments),
  };
};
