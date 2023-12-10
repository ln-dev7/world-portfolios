import Link from "next/link";
import SvgViewBox from "@/components/SvgViewBox";
import useSocialMedia, { SocialMedia } from "@/components/hooks/useSocialMedia";

const CardSocialMedia = ({
  handle,
  media,
}: {
  handle: string;
  media: SocialMedia;
}) => {
  const { socialMediaSvgIcons, buildSocialMediaUrl } = useSocialMedia();

  if (!handle || !media) return null;
  const svgIcon = socialMediaSvgIcons.find((icon) => icon.media === media);
  if (!svgIcon) return null;

  const url = buildSocialMediaUrl(handle, media);
  const { svgValues } = svgIcon;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social__${media}`}
    >
      <SvgViewBox>
        {svgValues.map((svgValue, index) => (
          <path key={index} d={svgValue}></path>
        ))}
      </SvgViewBox>
    </Link>
  );
};

export default CardSocialMedia;
