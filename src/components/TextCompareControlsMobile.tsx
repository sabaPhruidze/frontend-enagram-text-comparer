import plusAddIcon from "../assets/Plus, Add.svg";
import type { LanguageCode } from "../constants/languageOptions";
import LanguageDropdown from "./LanguageDropdown";

type TextCompareControlsMobileProps = {
  isFormattingPreserved: boolean;
  isResetEnabled: boolean;
  selectedLanguage: LanguageCode;
  onFormattingPreserveChange: (isChecked: boolean) => void;
  onLanguageChange: (languageCode: LanguageCode) => void;
  onReset: () => void;
};

const TextCompareControlsMobile = ({ isFormattingPreserved, isResetEnabled, onFormattingPreserveChange, onLanguageChange, onReset, selectedLanguage }: TextCompareControlsMobileProps) => {
  return (
    <section className="px-4 pb-4 pt-6 md:px-7 md:pb-0">
      <div className="mx-auto flex w-72 flex-col gap-4 md:w-full md:flex-row md:items-center md:gap-7">
        <LanguageDropdown className="w-full md:w-38.75 md:shrink-0" onLanguageChange={onLanguageChange} selectedLanguage={selectedLanguage} />

        {/* checkbox მართავს ფორმატის შენარჩუნებას */}
        <label className="flex h-5.5 w-fit items-center gap-2 md:gap-3">
          <input checked={isFormattingPreserved} className="h-5 w-5 cursor-pointer rounded border border-[#E0E0E0] accent-[#3465E1]" onChange={(event) => onFormattingPreserveChange(event.target.checked)} type="checkbox" />
          <span className="text-sm leading-5.5 font-normal tracking-[0.01em] text-[#383A48]">ფორმატის შენარჩუნება</span>
        </label>

        <button className={`flex h-10.5 items-center justify-center gap-1 rounded-md px-4 py-2.5 pl-3 md:ml-auto md:w-37.5 md:shrink-0 md:px-3 md:py-2.5 md:pr-4 ${isResetEnabled ? "cursor-pointer bg-[#466FE8]" : "cursor-not-allowed bg-[#383A4899]"}`} disabled={!isResetEnabled} onClick={onReset} type="button">
          <img alt="დამატება" className="h-6 w-6" src={plusAddIcon} />
          <span className="text-sm leading-7 font-normal text-white">ახლის გახსნა</span>
        </button>
      </div>
      <div className="mx-auto mt-4 h-px w-72 bg-[#E6E6E6] md:mt-3 md:w-full md:bg-[#EDEDED]" />
    </section>
  );
};

export default TextCompareControlsMobile;
