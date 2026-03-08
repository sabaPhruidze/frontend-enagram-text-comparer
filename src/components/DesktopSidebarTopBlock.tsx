import enagramLogo from "../assets/enagram-logo.svg";
import sidebarCollapse from "../assets/sidebar-collapse.svg";

const DesktopSidebarTopBlock = () => (
  <div className="rounded-br-[1.875rem] px-6 pb-4 pt-[2.8125rem]">
    <div className="flex items-start justify-between">
      <div className="flex h-11 w-[6.184rem] items-center gap-3">
        <img alt="Enagram logo" className="h-11 w-[2.665625rem]" src={enagramLogo} />
        <p className="w-[3.518125rem] text-[0.625rem] leading-[0.4675rem] font-semibold tracking-[0.08em] text-white">
          ENAGRAM
        </p>
      </div>
      <img alt="Collapse sidebar" className="h-5 w-5" src={sidebarCollapse} />
    </div>
  </div>
);

export default DesktopSidebarTopBlock;
