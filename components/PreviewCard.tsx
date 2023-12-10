"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/contexts/countryContext";
import { CardCloseSvg } from "@/components/icons";
import CardSocialMedia from "@/components/CardSocialMedia";

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
            <CardSocialMedia handle={socials.twitter} media={"twitter"} />
            <CardSocialMedia handle={socials.github} media={"github"} />
            <CardSocialMedia handle={socials.linkedin} media={"linkedIn"} />
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
