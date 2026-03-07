import circleCircleIcon from "../assets/circle-circle.svg";

type CompareProgressCardProps = { progressValue: number };

const CompareProgressCard = ({ progressValue }: CompareProgressCardProps) => {
  const safeProgress = Math.max(0, Math.min(100, progressValue));

  return (
    <div className="flex h-25 w-[21.9375rem] items-center gap-2 rounded-[1.25rem] border border-[#D2D4D8] bg-white p-4 md:h-20 md:w-70 md:rounded-lg md:border-[#E1E1E1] lg:h-25 lg:w-[21.9375rem] lg:rounded-[1.25rem] lg:border-[#D2D4D8]">
      {/* შედარების პროცესის ბარათი */}
      <img alt="პროგრესი" className="h-10 w-10 shrink-0" src={circleCircleIcon} />

      <div className="flex w-[15.6875rem] flex-col gap-1 md:w-50 lg:w-[15.6875rem]">
        <p className="w-50 text-[0.625rem] leading-4 font-normal text-[#383A48]/60">
          Converting...Thank you For your Patience
        </p>

        <div className="flex w-[15.6875rem] items-end gap-2 md:w-50 lg:w-[15.6875rem]">
          <p className="w-[2.0625rem] text-base leading-6 font-bold text-[#383A48]">{safeProgress}%</p>
          <div className="h-2 w-[13.125rem] rounded-[4rem] bg-[#F6F9FF] md:w-[9.9375rem] lg:w-[13.125rem]">
            <div
              className="h-2 rounded-[4rem] bg-[#4571E4] transition-[width] duration-300"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProgressCard;
