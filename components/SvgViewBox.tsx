import { PropsWithChildren } from "react";

const SvgViewBox = ({ children }: PropsWithChildren) => {
  return (
    <svg
      width="46"
      height="46"
      fill="none"
      stroke="#576f7f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default SvgViewBox;
