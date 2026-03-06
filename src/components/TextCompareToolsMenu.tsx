import type { ToolId, ToolOption } from "../constants/toolOptions";

type TextCompareToolsMenuProps = { isOpen: boolean; onSelectTool: (toolId: ToolId) => void; tools: ToolOption[] };

const TextCompareToolsMenu = ({ isOpen, onSelectTool, tools }: TextCompareToolsMenuProps) => {
  return (
    <div className={`overflow-hidden border-b border-[#E3E4E8] bg-white transition-all duration-300 ${isOpen ? "max-h-44 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
      {/* ჩამოსაშლელში ვაჩვენებთ მხოლოდ დარჩენილ ინსტრუმენტებს */}
      <div className="flex flex-col py-1">
        {tools.map((toolOption) => (
          <button className="flex h-11 w-full cursor-pointer items-center gap-2 text-left text-xs leading-5 font-bold text-[#132450]" key={toolOption.id} onClick={() => onSelectTool(toolOption.id)} type="button">
            <img alt={toolOption.label} className="h-4 w-4" src={toolOption.icon} />
            <span>{toolOption.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TextCompareToolsMenu;
