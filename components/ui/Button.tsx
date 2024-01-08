import React from "react";

interface Props {
  title: string;
  type?: string;
}

const Button = ({ title, type }: Props) => {
  return (
    <button className="text-light-900 primary-gradient px-4 py-3 base-semibold rounded-lg w-fit">
      {title}
    </button>
  );
};

export default Button;
