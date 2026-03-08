import repeatIcon from "../assets/repeat.svg";

type CompareActionButtonProps = {
  className?: string;
  disabled?: boolean;
  hasCompared?: boolean;
  isEnabled: boolean;
  onCompare: () => void;
};

const buttonClass = (isEnabled: boolean) =>
  `flex h-12 w-35.5 items-center justify-center gap-1 rounded-md px-4 py-2.5 text-sm leading-7 font-normal text-white lg:mx-auto ${
    isEnabled ? "cursor-pointer bg-[#466FE8]" : "cursor-not-allowed bg-[#383A4899]"
  }`;

const CompareActionButton = ({ className, disabled, hasCompared = false, isEnabled, onCompare }: CompareActionButtonProps) => (
  <button
    className={`${buttonClass(isEnabled)} ${className ?? ""}`}
    disabled={disabled}
    onClick={onCompare}
    type="button"
  >
    {hasCompared ? (
      <img
        alt=""
        aria-hidden="true"
        className="hidden h-6 w-6 shrink-0 min-[1440px]:block"
        src={repeatIcon}
      />
    ) : null}
    შედარება
  </button>
);

export default CompareActionButton;
