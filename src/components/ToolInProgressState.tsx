type ToolInProgressStateProps = { toolLabel: string };

const ToolInProgressState = ({ toolLabel }: ToolInProgressStateProps) => {
  return (
    <section className="px-4 py-20 md:px-7 md:py-24">
      {/* ტექსტის შედარების გარდა ვაჩვენებთ დროებით სტატუსს */}
      <div className="mx-auto flex w-72 flex-col items-center rounded-lg border border-[#E3E4E8] bg-white px-4 py-10 text-center md:w-full">
        <p className="text-base leading-6 font-bold text-[#132450]">{toolLabel}</p>
        <p className="mt-2 text-sm leading-5.5 text-[#383A48]/70">
          ეს ინსტრუმენტი ჯერ მუშაობის პროცესშია.
        </p>
      </div>
    </section>
  );
};

export default ToolInProgressState;

