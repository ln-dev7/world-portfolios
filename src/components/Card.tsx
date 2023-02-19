import Link from "next/link";

import { Modal } from "react-bootstrap";
import PreviewCard from "./PreviewCard";
import { useState } from "react";

const cleanUrl = (link: string) => {
  return (
    link
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .slice(0, 29) + (link.length > 29 ? "..." : "")
  );
};

export default function Header({
  name,
  link,
  tags,
}: {
  name: string;
  link: string;
  tags: string[];
}) {
  const [previewCardIsOpen, setPreviewCardIsOpen] = useState(false);
  const handlePreviewCardOpen = () => {
    setPreviewCardIsOpen(true);
  };
  const handlePreviewCardClose = () => {
    setPreviewCardIsOpen(false);
  };

  return (
    <>
      <Modal show={previewCardIsOpen} onHide={handlePreviewCardClose}>
        <PreviewCard handlePreviewCardClose={handlePreviewCardClose} />
      </Modal>
      <div className="card" onClick={handlePreviewCardOpen}>
        <div className="card-container">
          <h2>{name}</h2>
          <Link href={link} target="_blank">
            {cleanUrl(link)}
          </Link>
        </div>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}
