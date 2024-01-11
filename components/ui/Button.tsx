import React, { ReactElement } from "react";
import Spinner from "./Spinner";
import Link from "next/link";

interface Props {
  title: string;
  type?: string;
  href?: string;
  icon?: ReactElement;
  isSubmitting?: boolean;
  isSubmittingText?: string;
}

const Button = ({
  title,
  type,
  icon,
  href,
  isSubmitting,
  isSubmittingText,
}: Props) => {
  return href ? (
    <Link
      href={href}
      className="flex justify-center items-center gap-3 text-light-900 base-semibold rounded-lg w-fit primary-gradient px-4 py-3"
    >
      {icon} {title}
    </Link>
  ) : (
    <button
      className={`text-light-900 px-4 py-3 base-semibold rounded-lg w-fit ${
        isSubmitting ? "bg-gray-500 opacity-35" : "primary-gradient"
      }`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          {isSubmittingText} <Spinner />
        </>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
