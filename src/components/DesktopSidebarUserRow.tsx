const SidebarDotsMenu = () => (
  <svg aria-hidden="true" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
    <circle cx="6" cy="12" fill="currentColor" r="1.8" />
    <circle cx="12" cy="12" fill="currentColor" r="1.8" />
    <circle cx="18" cy="12" fill="currentColor" r="1.8" />
  </svg>
);

const DesktopSidebarUserRow = () => (
  <div className="border-t border-[#9EB9FF33] pl-3.5 pr-3">
    <div className="flex h-15 items-center justify-between">
      <div className="flex min-w-0 items-center gap-2">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white bg-[#9EC8FF] text-sm leading-none font-semibold text-[#132450]">
          თ
        </div>
        <span className="truncate text-sm leading-5 font-normal text-white">თამარ ონიანი</span>
      </div>
      <SidebarDotsMenu />
    </div>
  </div>
);

export default DesktopSidebarUserRow;
