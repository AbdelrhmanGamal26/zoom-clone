"use client";

interface CustomLabelWithInput {
  text: string;
  type?: string;
  checked: boolean;
  onClick: () => void;
}

const CustomLabelWithInput = ({
  text,
  checked,
  onClick,
  type = "checkbox",
}: CustomLabelWithInput) => {
  return (
    <label className="text-[12px] sm:text-[14px] md:text-[16px] flex justify-center items-center gap-2 font-medium">
      <input type={type} defaultChecked={checked} onClick={onClick} />
      {text}
    </label>
  );
};

export default CustomLabelWithInput;
