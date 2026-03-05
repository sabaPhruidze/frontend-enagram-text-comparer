import swapHorizontal from "../assets/swap-horizontal.svg";

const TextCompareWorkspaceMobile = () => {
  return (
    <section className="px-4 pb-6 pt-4">
      {/* შედარების სამუშაო არე: 288px სიგანე, ორი 190px ბლოკი */}
      <div className="mx-auto flex w-72 flex-col items-center gap-4">
        <textarea
          className="h-47.5 w-full resize-none rounded-lg bg-[#F0F7FF] p-3 text-sm leading-[1.375rem] text-[#383A48] outline-none placeholder:text-[#8E98A8]"
          placeholder="დაიწერე ტექსტი..."
        />

        <button
          className="flex h-12 w-35.5 items-center justify-center rounded-md text-[#383A48]/60"
          type="button"
        >
          <img alt="ტექსტების გაცვლა" className="h-8 w-8 rotate-90" src={swapHorizontal} />
        </button>

        <textarea
          className="h-47.5 w-full resize-none rounded-lg bg-[#F0F7FF] p-3 text-sm leading-[1.375rem] text-[#383A48] outline-none placeholder:text-[#8E98A8]"
          placeholder="დაიწერე ტექსტი..."
        />

        <button
          className="h-12 w-35.5 rounded-md bg-[#9598A3] px-4 py-2.5 text-sm leading-7 font-normal text-white"
          type="button"
        >
          შედარება
        </button>
      </div>
    </section>
  );
};

export default TextCompareWorkspaceMobile;
