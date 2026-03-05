import enagramLogo from "../assets/enagram-logo.svg";
import menuHamburger from "../assets/menu-hamburger.svg";
import chevronDown from "../assets/chevron-down.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";

const TextCompareMobileHeader = () => {
  return (
    <header className="w-full">
      {/* მობილურის ზედა ნავიგაციის ზოლი */}
      <div className="flex h-[54px] items-center justify-between bg-[#132450] px-4">
        <div className="flex items-center gap-2.5">
          <img alt="Enagram ლოგო" className="h-9 w-9" src={enagramLogo} />
          <p className="text-[12px] font-semibold tracking-[0.12em] text-white">ENAGRAM</p>
        </div>
        <img alt="მენიუ" className="h-6 w-6" src={menuHamburger} />
      </div>

      {/* აქტიური გვერდის სათაური */}
      <div className="flex h-[66px] items-center border-b border-[#E3E4E8] bg-[#F3F3F4] px-4">
        <div className="flex items-center gap-2">
          <img alt="ტექსტის შედარება" className="h-6 w-6" src={sidebarTextCompare} />
          <p className="text-[20px] font-semibold text-[#132450]">ტექსტის შედარება</p>
          <img alt="ჩამოსაშლელი" className="h-1.5 w-2.5" src={chevronDown} />
        </div>
      </div>
    </header>
  );
};

export default TextCompareMobileHeader;
