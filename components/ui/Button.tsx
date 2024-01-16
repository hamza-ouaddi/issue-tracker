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
  theme: string;
  radius?: string;
}

const Button = ({
  title,
  type,
  icon,
  href,
  isSubmitting,
  isSubmittingText,
  theme,
  radius,
}: Props) => {
  return href ? (
    <Link
      href={href}
      className={`flex justify-center items-center gap-3 text-light-900 base-semibold min-w-fit px-4 py-3 ${
        theme === "primary" ? "primary-gradient" : ""
      } ${theme === "secondary" ? "bg-grey-secondary" : ""} ${
        radius ? radius : "rounded-lg"
      }`}
    >
      {icon} {title}
    </Link>
  ) : (
    <button
      className={`text-light-900 px-4 py-3 base-semibold w-fit ${
        isSubmitting ? "bg-gray-500 opacity-35" : theme
      } ${theme === "primary" ? "primary-gradient" : ""} ${
        theme === "secondary" ? "bg-grey-secondary" : ""
      }
      `}
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
