import sidebarOrthography from "../assets/sidebar-orthography.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";
import sidebarTextToVoice from "../assets/sidebar-text-to-voice.svg";
import sidebarVoiceToText from "../assets/sidebar-voice-to-text.svg";
import sidebarPdfConvert from "../assets/sidebar-pdf-convert.svg";

type TextCompareToolsMenuProps = { isOpen: boolean };

const TextCompareToolsMenu = ({ isOpen }: TextCompareToolsMenuProps) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {/* ინსტრუმენტების ჩამოსაშლელი მენიუ */}
      <aside className="w-54 rounded-r-2xl bg-[#132450] px-3 py-4 text-white">
        <div className="mb-4 flex items-center gap-2 px-2">
          <img alt="" className="h-6 w-6" src={sidebarOrthography} />
          <p className="text-sm leading-6 font-normal">მართლწერი</p>
        </div>

        <div className="mb-1 flex h-10 items-center gap-2 rounded-full bg-white px-3">
          <img alt="" className="h-6 w-6" src={sidebarTextCompare} />
          <p className="text-sm leading-6 font-semibold text-[#132450]">ტექსტის შედარება</p>
        </div>

        <div className="mb-1 flex items-center gap-2 px-3 py-2">
          <img alt="" className="h-6 w-6" src={sidebarVoiceToText} />
          <p className="text-sm leading-6 font-normal">ხმა -&gt; ტექსტი</p>
        </div>

        <div className="mb-1 flex items-center gap-2 px-3 py-2">
          <img alt="" className="h-6 w-6" src={sidebarTextToVoice} />
          <p className="text-sm leading-6 font-normal">ტექსტი -&gt; ხმა</p>
        </div>

        <div className="flex items-center gap-2 px-3 py-2">
          <img alt="" className="h-6 w-6 object-contain" src={sidebarPdfConvert} />
          <p className="text-sm leading-6 font-normal">PDF კონვერტაცია</p>
        </div>
      </aside>
    </div>
  );
};

export default TextCompareToolsMenu;
