import { ReactNode } from "react";

type SvgProps = {
  children: ReactNode;
};

const SvgViewBox = (props: SvgProps) => {
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
      {props.children}
    </svg>
  );
};

export default SvgViewBox;
