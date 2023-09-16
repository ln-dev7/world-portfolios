import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/countryContext";
import { CardCloseSvg, GithubSvg, LinkedInSvg, TwitterSvg } from "./Icons";

export default function PreviewCard({
  handlePreviewCardClose,
  name,
  link,
  tags,
  socials,
}: {
  handlePreviewCardClose: () => void;
  name: string;
  link: string | string[];
  tags: string[];
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}) {
  const { country } = useContext(Context);
  const { code: currentCountryCode, name: currentCountryName } = country;
  return (
    <div className="preview-card">
      <div className="card">
        <button className="card-close" onClick={handlePreviewCardClose}>
          <CardCloseSvg />
        </button>
        <div className="card-banner">
          <Image
            width={384}
            height={274}
            src={`/assets/images/${currentCountryCode}/card-portfolio.png`}
            alt={`${currentCountryName} Card Banner`}
          />

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
                <TwitterSvg />
              </Link>
            )}
            {socials.github !== "" && (
              <Link
                href={"https://github.com/" + socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social__github"
              >
                <GithubSvg context={"default"} />
              </Link>
            )}
            {socials.linkedin !== "" && (
              <Link
                href={"https://linkedin.com/in/" + socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social__linkedin"
              >
                <LinkedInSvg />
              </Link>
            )}
          </div>

          {typeof link === "string" && (
            <Link className="card-portfolio" href={link} target="_blank">
              <span>Visit Portfolio</span>
            </Link>
          )}
          {Array.isArray(link) && (
            <div className="group">
              {link.map((singleLink: string, index: any) => (
                <Link
                  className="card-portfolio"
                  key={index}
                  href={singleLink}
                  target="_blank"
                >
                  <span>Visit Portfolio</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
