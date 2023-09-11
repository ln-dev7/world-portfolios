import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/countryContext";
import SvgViewBox from "@/components/SvgViewBox";
import UserProfile from "@/interfaces/userProfile.interface";
import CardSocial from "@/components/CardSocial.";

type Props = UserProfile & { handlePreviewCardClose: () => void };

export default function PreviewCard({
  name,
  link,
  tags,
  socials,
  handlePreviewCardClose,
}: Props) {
  const { country } = useContext(Context);
  const { code: currentCountryCode, name: currentCountryName } = country;
  const buildInitials = (name: string) => {
    return name.split(" ")[1] === undefined
      ? name.split(" ")[0][0] + name.split(" ")[0][1]
      : name.split(" ")[0][0] + name.split(" ")[1][0];
  };

  return (
    <div className="preview-card">
      <div className="card">
        <button className="card-close" onClick={handlePreviewCardClose}>
          <SvgViewBox>
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </SvgViewBox>
        </button>
        <div className="card-banner">
          <Image
            width={384}
            height={274}
            src={`/assets/images/${currentCountryCode}/card-portfolio.png`}
            alt={`${currentCountryName} Card Banner`}
          />

          <h1>{buildInitials(name)}</h1>
        </div>
        <div className="card__body">
          <h2 className="card-name">{name}</h2>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="card-socials">
            <CardSocial handle={socials.twitter} media={'twitter'} />
            <CardSocial handle={socials.github} media={'github'} />
            <CardSocial handle={socials.linkedin} media={'linkedIn'} />
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
