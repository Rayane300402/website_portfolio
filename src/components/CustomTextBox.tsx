const CustomTextBox = ({
  title,
  p1,
  p2,
}: {
  title: string;
  p1: string;
  p2: string;
}) => {
  return (
    <div className="w-full flex flex-col">
      <span className="font-segoe-ui uppercase text-[36px]">{title}</span>

      <p className="mt-6 me-24 font-segoe-ui font-light text-[24px]">{p1}</p>

       <p className="mt-6 me-24 font-segoe-ui font-light text-[24px]">{p2}</p>
    </div>
  );
};

export default CustomTextBox;
