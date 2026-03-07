import { useEffect, useRef } from "react";
import enagramLogo from "../assets/enagram-logo.svg";
import menuHamburger from "../assets/menu-hamburger.svg";
import type { ToolOption } from "../constants/toolOptions";
import SubheaderChevron from "./SubheaderChevron";

type TextCompareMobileHeaderProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onTriggerWidthChange: (widthValue: number) => void;
  selectedTool: ToolOption;
};

const TextCompareMobileHeader = ({ isMenuOpen, onToggleMenu, onTriggerWidthChange, selectedTool }: TextCompareMobileHeaderProps) => {
  const triggerContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerContentRef.current) return;
    const triggerElement = triggerContentRef.current;
    const updateWidth = () => onTriggerWidthChange(Math.ceil(triggerElement.getBoundingClientRect().width));
    updateWidth();
    const widthObserver = new ResizeObserver(updateWidth);
    widthObserver.observe(triggerElement);
    window.addEventListener("resize", updateWidth);
    return () => { widthObserver.disconnect(); window.removeEventListener("resize", updateWidth); };
  }, [onTriggerWidthChange, selectedTool.id]);

  return (
    <header className="w-full bg-white">
      <div className="flex h-15 items-center justify-between bg-[#132450] px-5 md:h-12 md:px-7">
        <div className="flex h-9 w-22.5 items-center justify-between">
          <img alt="Enagram ლოგო" className="h-9 w-9" src={enagramLogo} />
          <p className="text-xs font-semibold tracking-[0.12em] text-white">ENAGRAM</p>
        </div>
        <img alt="მენიუ" className="h-6 w-6" src={menuHamburger} />
      </div>

      <button className="flex h-14 w-full cursor-pointer items-center border-b border-[#EDEDED] px-5 text-left md:h-18 md:px-7" onClick={onToggleMenu} type="button">
        <div className="flex items-center gap-2 md:gap-1.5" ref={triggerContentRef}>
          <img alt={selectedTool.label} className="h-4 w-4 md:h-6 md:w-6" src={selectedTool.icon} />
          <p className="text-xs leading-5 font-bold text-[#132450] md:w-[9.6875rem] md:whitespace-nowrap md:text-base md:leading-5">{selectedTool.label}</p>
          <SubheaderChevron isOpen={isMenuOpen} />
        </div>
      </button>
    </header>
  );
};

export default TextCompareMobileHeader;
