import React from "react";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: string | any;
}

const ButtonCommon: React.FC<IButtonProps> = ({
  label,
  onClick,
  disabled,
  type,
  className
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {label}
    </button>
  );
};

export default ButtonCommon;
