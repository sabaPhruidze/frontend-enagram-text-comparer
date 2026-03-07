import enagramLogo from "../assets/enagram-logo.svg";
import sidebarCollapse from "../assets/sidebar-collapse.svg";
import sidebarOrthography from "../assets/sidebar-orthography.svg";

const DesktopSidebarTopBlock = () => (
  <div className="rounded-br-[1.875rem] px-5 pb-6 pt-10 min-[1440px]:px-[0.8rem] min-[1440px]:pb-4 min-[1440px]:pt-4">
    <div className="flex items-start justify-between">
      <div className="flex h-11 w-27.5 items-center gap-3">
        <img alt="Enagram logo" className="h-11 w-10.5" src={enagramLogo} />
        <p className="text-xs leading-4 font-semibold tracking-[0.08em] text-white">ENAGRAM</p>
      </div>
      <img alt="Collapse sidebar" className="h-5 w-5 opacity-50" src={sidebarCollapse} />
    </div>

    <div className="mt-11 flex h-13 items-center gap-2 text-sm leading-5 font-normal text-white min-[1440px]:mt-8">
      <img alt="Orthography" className="h-6 w-6 shrink-0" src={sidebarOrthography} />
      <span>მართლმწერი</span>
    </div>
  </div>
);

export default DesktopSidebarTopBlock;
