import { useEffect, useMemo, useRef, useState } from "react";
import { LANGUAGE_OPTIONS, type LanguageCode } from "../constants/languageOptions";
import SelectChevron from "./SelectChevron";

type LanguageDropdownProps = { className?: string; selectedLanguage: LanguageCode; onLanguageChange: (languageCode: LanguageCode) => void };

const LanguageDropdown = ({ className, onLanguageChange, selectedLanguage }: LanguageDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const selectedLanguageLabel = useMemo(() => LANGUAGE_OPTIONS.find((languageOption) => languageOption.code === selectedLanguage)?.label ?? "ქართული", [selectedLanguage]);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current?.contains(event.target as Node)) return;
      setIsOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);
    return () => { window.removeEventListener("mousedown", handleOutsideClick); window.removeEventListener("keydown", handleEscape); };
  }, [isOpen]);

  return (
    <div className={className ? `relative ${className}` : "relative"} ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        className={`flex h-10 w-full items-center rounded-lg border bg-white px-3.5 py-1 pr-1.5 text-left ${isOpen ? "border-[#3465E1]" : "border-[#D2D4D8] min-[1440px]:border-[#E0E0E0]"}`}
        onClick={() => setIsOpen((currentState) => !currentState)}
        type="button"
      >
        <p className="text-sm leading-5.5 font-normal text-[#383A48]">{selectedLanguageLabel}</p>
        <div className={`ml-auto transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}><SelectChevron /></div>
      </button>

      <div className={`absolute left-0 top-10 z-20 w-full overflow-hidden rounded-b-2xl border border-[#3465E1] bg-white transition-all duration-200 ${isOpen ? "max-h-32 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"}`}>
        {LANGUAGE_OPTIONS.map((languageOption) => (
          <button
            className="flex h-11 w-full cursor-pointer items-center gap-3 px-3.5 text-left"
            key={languageOption.code}
            onClick={() => { onLanguageChange(languageOption.code); setIsOpen(false); }}
            type="button"
          >
            <span className={`h-4.5 w-4.5 rounded-full border ${selectedLanguage === languageOption.code ? "border-[#3465E1]" : "border-[#D2D4D8]"}`} />
            <span className="text-sm leading-5.5 font-normal text-[#383A48]">{languageOption.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
