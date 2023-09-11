import {
  buildSocialMediaUrl,
  SocialMedia,
  socialMediaSvgs,
} from "@/utils/svgSocials";
import Link from "next/link";
import SvgViewBox from "@/components/SvgViewBox";

const CardSocial = ({
  handle,
  media,
}: {
  handle: string;
  media: SocialMedia;
}) => {
  if (!handle) return null;

  const url = buildSocialMediaUrl(handle, media);
  const socialMedia = socialMediaSvgs.find((x) => x.media === media);
  if (!socialMedia) return null;
  const { svgs } = socialMedia;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social__${media}`}
    >
      <SvgViewBox>
        {svgs.map((x, index) => (
          <path key={index} d={x}></path>
        ))}
      </SvgViewBox>
    </Link>
  );
};

export default CardSocial;
