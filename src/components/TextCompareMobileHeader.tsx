import enagramLogo from "../assets/enagram-logo.svg";
import menuHamburger from "../assets/menu-hamburger.svg";
import chevronDown from "../assets/chevron-down.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";

const TextCompareMobileHeader = () => {
  return (
    <header className="w-full bg-[#F3F3F4]">
      {/* მობილურის ზედა ნავიგაციის ზოლი */}
      <div className="flex h-15 items-center justify-between bg-[#132450] px-5">
        <div className="flex h-9 w-22.5 items-center justify-between">
          <img alt="Enagram ლოგო" className="h-9 w-9" src={enagramLogo} />
          <p className="text-xs font-semibold tracking-[0.12em] text-white">
            ENAGRAM
          </p>
        </div>
        <img alt="მენიუ" className="h-6 w-6" src={menuHamburger} />
      </div>

      {/* აქტიური გვერდის სათაური */}
      <div className="flex h-14 items-center border-b border-[#E3E4E8] px-5">
        <div className="flex items-center gap-2.5">
          <img
            alt="ტექსტის შედარება"
            className="h-6 w-6"
            src={sidebarTextCompare}
          />
          <p className="text-xl font-semibold text-[#132450]">
            ტექსტის შედარება
          </p>
          <img alt="ჩამოსაშლელი" className="h-1.5 w-2.5" src={chevronDown} />
        </div>
      </div>
    </header>
  );
};

export default TextCompareMobileHeader;
