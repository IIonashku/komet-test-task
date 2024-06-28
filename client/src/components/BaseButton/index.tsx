import { FC, HTMLProps } from "react";

type BaseButtonProps = HTMLProps<HTMLButtonElement> & {
  titleColor?: string;
  bgColor?: string;
  title: string;
};

const BaseButton: FC<BaseButtonProps> = ({
  onClick,
  title,
  titleColor,
  bgColor,
}) => {
  return (
    <button
      className={`rounded-md py-2 px-6 text-base ${
        titleColor ? titleColor : "text-white"
      } ${bgColor ? bgColor : "bg-emerald-500"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BaseButton;
