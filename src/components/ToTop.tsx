import { useRef, useEffect, useState } from "react";
import { ToTopSvg } from "./Icons";

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
      <ToTopSvg />
    </div>
  );
};

export default Top;
