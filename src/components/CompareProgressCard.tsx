import circleCircleIcon from "../assets/circle-circle.svg";

type CompareProgressCardProps = { progressValue: number };

const CompareProgressCard = ({ progressValue }: CompareProgressCardProps) => {
  const safeProgress = Math.max(0, Math.min(100, progressValue));

  return (
    <div className="flex h-20 w-70 items-center gap-2 rounded-lg border border-[#E1E1E1] bg-white p-4 md:h-auto md:w-full md:gap-5 md:rounded-[1.25rem] md:border-[#D5D8DF] md:px-10 md:py-8">
      {/* შედარების პროცესის ბარათი */}
      <img alt="პროგრესი" className="h-10 w-10 shrink-0" src={circleCircleIcon} />

      <div className="flex flex-col gap-1 md:flex-1 md:gap-3">
        <p className="w-50 text-[0.625rem] leading-4 font-normal text-[#383A48]/60">
          Converting...Thank you For your Patience
        </p>

        <div className="flex w-50 items-center gap-2 md:w-full md:gap-4">
          <p className="w-[2.0625rem] text-base leading-6 font-bold text-[#383A48] md:w-auto md:min-w-22 md:text-[3rem] md:leading-[3rem]">{safeProgress}%</p>
          <div className="h-2 flex-1 rounded-[4rem] bg-[#E7ECF5] md:h-6">
            <div
              className="h-2 rounded-[4rem] bg-[#4571E4] transition-[width] duration-300 md:h-6"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProgressCard;
