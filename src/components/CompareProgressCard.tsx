import circleCircleIcon from "../assets/circle-circle.svg";

type CompareProgressCardProps = { progressValue: number };

const CompareProgressCard = ({ progressValue }: CompareProgressCardProps) => {
  const safeProgress = Math.max(0, Math.min(100, progressValue));

  return (
    <div className="flex h-20 w-70 items-center gap-2 rounded-lg border border-[#E1E1E1] bg-white p-4">
      {/* შედარების პროცესის ბარათი */}
      <img alt="პროგრესი" className="h-10 w-10 shrink-0" src={circleCircleIcon} />

      <div className="flex flex-col gap-1">
        <p className="w-50 text-[0.625rem] leading-4 font-normal text-[#383A48]/60">
          Converting...Thank you For your Patience
        </p>

        <div className="flex w-50 items-center gap-2">
          <p className="w-[2.0625rem] text-base leading-6 font-bold text-[#383A48]">{safeProgress}%</p>
          <div className="h-2 flex-1 rounded-[4rem] bg-[#E7ECF5]">
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
