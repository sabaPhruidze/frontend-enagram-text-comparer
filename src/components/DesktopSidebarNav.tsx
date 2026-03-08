import type { ToolId } from "../constants/toolOptions";

export type DesktopSidebarItem = {
  iconSrc: string;
  id: ToolId;
  label: string;
};

type DesktopSidebarNavProps = {
  items: DesktopSidebarItem[];
  onSelectTool: (toolId: ToolId) => void;
  selectedToolId: ToolId;
};

const DesktopSidebarNav = ({
  items,
  onSelectTool,
  selectedToolId,
}: DesktopSidebarNavProps) => (
  <nav className="mt-1">
    {items.map((item) => {
      const isSelected = item.id === selectedToolId;
      const iconClass = `h-6 w-6 shrink-0 ${isSelected ? "" : "brightness-0 invert"}`;
      const selectedButtonClass =
        "relative ml-[0.8rem] h-13 w-[14.4rem] rounded-l-[1.875rem] bg-white px-4 text-[#132450] before:pointer-events-none before:absolute before:-top-[1.875rem] before:right-0 before:h-[1.875rem] before:w-[1.875rem] before:rounded-br-[1.875rem] before:bg-[#132450] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[1.875rem] after:right-0 after:h-[1.875rem] after:w-[1.875rem] after:rounded-tr-[1.875rem] after:bg-[#132450] after:content-['']";
      const buttonClass = isSelected
        ? selectedButtonClass
        : "h-13 w-full px-5 text-white";

      return (
        <div className="flex h-18 relative" key={item.id}>
          {isSelected && (
            <>
              <div className="w-50 absolute h-2.5 right-0 top-0 bg-amber-50 z-1" />
              <div className="w-50 absolute h-2.5 right-0 top-0 bg-[#132450] z-2 rounded-br-full" />
            </>
          )}
          <button
            className={`flex cursor-pointer items-center gap-2 my-2.5 text-left ${buttonClass}`}
            onClick={() => onSelectTool(item.id)}
            type="button"
          >
            <img alt={item.label} className={iconClass} src={item.iconSrc} />
            <span
              className={`text-sm leading-5 tracking-normal ${isSelected ? "font-bold" : "font-normal"}`}
            >
              {item.label}
            </span>
          </button>
          {isSelected && (
            <>
              <div className="w-50 absolute h-2.5 right-0 bottom-0 bg-amber-50 z-1" />
              <div className="w-50 absolute h-2.5 right-0 bottom-0 bg-[#132450] z-2 rounded-tr-full" />
            </>
          )}
        </div>
      );
    })}
  </nav>
);

export default DesktopSidebarNav;
