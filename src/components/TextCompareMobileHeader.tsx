import enagramLogo from "../assets/enagram-logo.svg";
import menuHamburger from "../assets/menu-hamburger.svg";
import sidebarTextCompare from "../assets/sidebar-text-compare.svg";

const SubheaderChevron = () => {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 text-[#132450]/70"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        d="M2.8 4.9L7 9.1L11.2 4.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

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
        <div className="flex items-center gap-2">
          <img
            alt="ტექსტის შედარება"
            className="h-4 w-4"
            src={sidebarTextCompare}
          />
          <p className="text-xs leading-5 font-bold text-[#132450]">
            ტექსტის შედარება
          </p>
          <SubheaderChevron />
        </div>
      </div>
    </header>
  );
};

export default TextCompareMobileHeader;
