type SubheaderChevronProps = { isOpen: boolean };

const SubheaderChevron = ({ isOpen }: SubheaderChevronProps) => {
  return (
    <svg
      aria-hidden="true"
      className={`h-3.5 w-3.5 text-[#132450]/70 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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

export default SubheaderChevron;
