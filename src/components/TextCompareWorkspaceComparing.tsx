import CompareActionButton from "./CompareActionButton";
import CompareProgressCard from "./CompareProgressCard";
import type { ComparingWorkspaceProps } from "./textCompareWorkspace.types";
import { workspaceSectionClass } from "./textCompareWorkspace.types";

const TextCompareWorkspaceComparing = ({ onCompare, progressValue }: ComparingWorkspaceProps) => (
  <section className={workspaceSectionClass}>
    <div className="mx-auto flex w-72 flex-col items-center pt-56 md:w-full md:pt-40 lg:max-w-[71rem]">
      <CompareProgressCard progressValue={progressValue} />
      <CompareActionButton className="mt-36" disabled isEnabled={false} onCompare={onCompare} />
    </div>
  </section>
);

export default TextCompareWorkspaceComparing;
