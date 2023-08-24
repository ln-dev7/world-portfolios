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
  socials,
}: {
  name: string;
  link: string;
  tags: string[];
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
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
        <PreviewCard
          handlePreviewCardClose={handlePreviewCardClose}
          name={name}
          link={link}
          tags={tags}
          socials={socials}
        />
      </Modal>
      <div className="card" onClick={handlePreviewCardOpen}>
        <div className="card-container">
          <h2>{name}</h2>
          {typeof link === "string" && (
            <Link
              href={link}
              target="_blank"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {cleanUrl(link)}
            </Link>
          )}
          {Array.isArray(link) && (
            <div>
              {link.map((singleLink: string, index: any) => (
                <Link
                  href={singleLink}
                  target="_blank"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {cleanUrl(singleLink)}
                </Link>
              ))}
            </div>
          )}
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
