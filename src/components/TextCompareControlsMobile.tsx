import chevronDown from "../assets/chevron-down.svg";
import plusAddIcon from "../assets/Plus, Add.svg";

const TextCompareControlsMobile = () => {
  return (
    <section className="px-4 pb-4 pt-6">
      {/* საკონტროლო ბლოკი ზუსტად 288px სიგანით */}
      <div className="mx-auto flex w-72 flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#D2D4D8] bg-[#F3F3F4] px-3.5 py-1 pr-1.5">
          <p className="text-lg leading-[1.375rem] font-normal text-[#383A48]">ქართული</p>
          <img alt="ჩამოსაშლელი" className="ml-auto h-1.5 w-2.5" src={chevronDown} />
        </div>

        {/* ფორმატის შენარჩუნების რიგი */}
        <label className="flex h-5.5 items-center gap-2">
          <input
            className="h-5.5 w-5.5 rounded border border-[#D2D4D8] accent-[#3465E1]"
            type="checkbox"
          />
          <span className="text-lg leading-[1.375rem] font-normal text-[#383A48]">ფორმატის შენარჩუნება</span>
        </label>

        <button
          className="flex h-10.5 items-center justify-center gap-1 rounded-md bg-[#9598A3] px-4 py-2.5 pl-3"
          type="button"
        >
          <img alt="დამატება" className="h-6 w-6" src={plusAddIcon} />
          <span className="text-lg leading-[1.375rem] font-normal text-white">ახლის გახსნა</span>
        </button>
      </div>

      <div className="mx-auto mt-4 h-px w-72 bg-[#E3E4E8]" />
    </section>
  );
};

export default TextCompareControlsMobile;
