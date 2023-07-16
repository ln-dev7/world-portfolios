import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/countryContext";

export default function PreviewCard({
  handlePreviewCardClose,
  name,
  link,
  tags,
  socials,
}: {
  handlePreviewCardClose: () => void;
  name: string;
  link: string;
  tags: string[];
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}) {
  const {
    countryCode,
    countryName,
    countryFlag,
    countryNumberCode,
    countries,
  } = useContext(Context);
  return (
    <div className="preview-card">
      <div className="card">
        <button className="card-close" onClick={handlePreviewCardClose}>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="#576f7f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <div className="card-banner">
          {countryCode == "cm" ? (
            <Image
              width={384}
              height={274}
              src="/assets/images/cm/card-portfolio.png"
              alt="banner"
            />
          ) : null}

          <h1>
            {name.split(" ")[1] === undefined
              ? name.split(" ")[0][0] + name.split(" ")[0][1]
              : name.split(" ")[0][0] + name.split(" ")[1][0]}
          </h1>
        </div>
        <div className="card__body">
          <h2 className="card-name">{name}</h2>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="card-socials">
            {socials.twitter !== "" && (
              <Link
                href={"https://twitter.com/" + socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social__twitter"
              >
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z"></path>
                </svg>
              </Link>
            )}
            {socials.github !== "" && (
              <Link
                href={"https://github.com/" + socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social__github"
              >
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                  <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
                </svg>
              </Link>
            )}
            {socials.linkedin !== "" && (
              <Link
                href={"https://linkedin.com/in/" + socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social__linkedin"
              >
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <path d="M2 9h4v12H2z"></path>
                  <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
                </svg>
              </Link>
            )}
          </div>
          <Link className="card-portfolio" href={link} target="_blank">
            <span>Visit Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
