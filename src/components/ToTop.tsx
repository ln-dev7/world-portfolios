import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const Top = () => {
  const [position, setPosition] = useState<
    { top: number; left: number } | undefined
  >({ top: 0, left: 0 });
  const scrollTop = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    window.scroll({
      top: position?.top,
      left: position?.left,
      behavior: "smooth",
    });
    window.addEventListener("scroll", (e) => {
      window.scrollY > 10
        ? scrollTop.current?.classList.add("show")
        : scrollTop.current?.classList.remove("show");
    });
  });

  return (
    <div
      className="to-top"
      onClick={() =>
        setPosition({
          ...position,
          top: 0,
          left: 0,
        })
      }
      ref={scrollTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"
          fill="rgba(5,150,105,1)"
        />
      </svg>
    </div>
  );
};

export default Top;
