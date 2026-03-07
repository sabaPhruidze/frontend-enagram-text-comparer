import enagramLogo from "../assets/enagram-logo.svg";
import sidebarCollapse from "../assets/sidebar-collapse.svg";
import sidebarOrthography from "../assets/sidebar-orthography.svg";

const DesktopSidebarTopBlock = () => (
  <div className="rounded-br-[1.875rem] px-5 pb-6 pt-10 min-[1440px]:px-6">
    <div className="flex items-start justify-between">
      <div className="flex h-11 w-27.5 items-center gap-3 min-[1440px]:w-[6.184rem]">
        <img alt="Enagram logo" className="h-11 w-10.5 min-[1440px]:w-[2.665625rem]" src={enagramLogo} />
        <p className="text-xs leading-4 font-semibold tracking-[0.08em] text-white min-[1440px]:w-[3.518125rem] min-[1440px]:text-[0.625rem] min-[1440px]:leading-[0.4675rem]">
          ENAGRAM
        </p>
      </div>
      <img alt="Collapse sidebar" className="h-5 w-5 opacity-50" src={sidebarCollapse} />
    </div>

    <div className="mt-11 flex h-13 items-center gap-2 text-sm leading-5 font-normal text-white min-[1440px]:h-6">
      <img alt="Orthography" className="h-6 w-6 shrink-0" src={sidebarOrthography} />
      <span>{"\u10DB\u10D0\u10E0\u10D7\u10DA\u10DB\u10EC\u10D4\u10E0\u10D8"}</span>
    </div>
  </div>
);

export default DesktopSidebarTopBlock;
