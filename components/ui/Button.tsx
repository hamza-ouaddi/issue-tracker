import React from "react";
import Spinner from "./Spinner";

interface Props {
  title: string;
  type?: string;
  isSubmitting?: boolean;
  isSubmittingText?: string;
}

const Button = ({ title, type, isSubmitting, isSubmittingText }: Props) => {
  return (
    <button
      className={`text-light-900  px-4 py-3 base-semibold rounded-lg w-fit ${
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
