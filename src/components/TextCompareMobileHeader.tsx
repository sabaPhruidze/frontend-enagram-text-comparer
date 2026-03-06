import { useEffect, useRef } from "react";
import enagramLogo from "../assets/enagram-logo.svg";
import menuHamburger from "../assets/menu-hamburger.svg";
import type { ToolOption } from "../constants/toolOptions";
import SubheaderChevron from "./SubheaderChevron";

type TextCompareMobileHeaderProps = { isMenuOpen: boolean; onToggleMenu: () => void; onTriggerWidthChange: (widthValue: number) => void; selectedTool: ToolOption };

const TextCompareMobileHeader = ({ isMenuOpen, onToggleMenu, onTriggerWidthChange, selectedTool }: TextCompareMobileHeaderProps) => {
  const triggerContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerContentRef.current) return;
    const triggerWidth = Math.ceil(triggerContentRef.current.getBoundingClientRect().width);
    onTriggerWidthChange(triggerWidth);
  }, [onTriggerWidthChange, selectedTool.id]);

  return (
    <header className="w-full bg-white">
      <div className="flex h-15 items-center justify-between bg-[#132450] px-5">
        <div className="flex h-9 w-22.5 items-center justify-between">
          <img alt="Enagram ლოგო" className="h-9 w-9" src={enagramLogo} />
          <p className="text-xs font-semibold tracking-[0.12em] text-white">ENAGRAM</p>
        </div>
        <img alt="მენიუ" className="h-6 w-6" src={menuHamburger} />
      </div>

      <button className="flex h-14 w-full cursor-pointer items-center border-b border-[#E3E4E8] px-5 text-left" onClick={onToggleMenu} type="button">
        <div className="flex items-center gap-2" ref={triggerContentRef}>
          <img alt={selectedTool.label} className="h-4 w-4" src={selectedTool.icon} />
          <p className="text-xs leading-5 font-bold text-[#132450]">{selectedTool.label}</p>
          <SubheaderChevron isOpen={isMenuOpen} />
        </div>
      </button>
    </header>
  );
};

export default TextCompareMobileHeader;
