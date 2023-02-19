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
    <p
      onClick={() =>
        setPosition({
          ...position,
          top: 0,
          left: 0,
        })
      }
      ref={scrollTop}
    >
      <Image
        className="to-top"
        src="assets/images/arrow-up-circle-fill.svg"
        alt="arrow-up"
        width={34}
        height={34}
      />
    </p>
  );
};

export default Top;
