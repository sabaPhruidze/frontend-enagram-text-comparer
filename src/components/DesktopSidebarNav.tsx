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

const DesktopSidebarNav = ({ items, onSelectTool, selectedToolId }: DesktopSidebarNavProps) => (
  <nav className="mt-1">
    {items.map((item) => {
      const isSelected = item.id === selectedToolId;
      const iconClass = `h-6 w-6 shrink-0 ${
        !isSelected && item.id === "text-compare" ? "brightness-0 invert" : ""
      }`;
      const buttonClass = isSelected
        ? "ml-3.25 h-13 w-57.5 rounded-l-[1.875rem] bg-white px-4 text-[#132450]"
        : "h-13 w-full px-5 text-white";

      return (
        <button
          className={`flex cursor-pointer items-center gap-2 text-left ${buttonClass}`}
          key={item.id}
          onClick={() => onSelectTool(item.id)}
          type="button"
        >
          <img alt={item.label} className={iconClass} src={item.iconSrc} />
          <span className={`text-sm leading-5 tracking-normal ${isSelected ? "font-bold" : "font-normal"}`}>
            {item.label}
          </span>
        </button>
      );
    })}
  </nav>
);

export default DesktopSidebarNav;
