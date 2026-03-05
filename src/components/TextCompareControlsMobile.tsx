import plusAddIcon from "../assets/Plus, Add.svg";
import SelectChevron from "./SelectChevron";
type TextCompareControlsMobileProps = { onReset: () => void };
const TextCompareControlsMobile = ({ onReset }: TextCompareControlsMobileProps) => {
  return (
    <section className="px-4 pb-4 pt-6">
      {/* საკონტროლო ბლოკი ზუსტად 288px სიგანით */}
      <div className="mx-auto flex w-72 flex-col gap-4">
        <div className="flex h-10 items-center rounded-lg border border-[#D2D4D8] bg-white px-3.5 py-1 pr-1.5">
          <p className="text-sm leading-[1.375rem] font-normal text-[#383A48]">ქართული</p>
          <div className="ml-auto">
            <SelectChevron />
          </div>
        </div>

        {/* ფორმატის შენარჩუნების რიგი */}
        <label className="flex h-5.5 w-fit items-center gap-2">
          <input
            className="h-5 w-5 cursor-pointer rounded border border-[#E0E0E0] accent-[#3465E1]"
            type="checkbox"
          />
          <span className="text-sm leading-[1.375rem] font-normal tracking-[0.01em] text-[#383A48]">
            ფორმატის შენარჩუნება
          </span>
        </label>

        <button
          className="flex h-10.5 cursor-pointer items-center justify-center gap-1 rounded-md bg-[#9598A3] px-4 py-2.5 pl-3"
          onClick={onReset}
          type="button"
        >
          <img alt="დამატება" className="h-6 w-6" src={plusAddIcon} />
          <span className="text-sm leading-7 font-normal text-white">ახლის გახსნა</span>
        </button>
      </div>

      <div className="mx-auto mt-4 h-px w-72 bg-[#E6E6E6]" />
    </section>
  );
};

export default TextCompareControlsMobile;
