export type SocialMedia = "twitter" | "github" | "linkedIn";
export type SocialMediaSvg = { media: SocialMedia; svgs: string[] }[];

const socialMediaSvgs: SocialMediaSvg = [
  {
    media: "github",
    svgs: [
      "M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5",
      "M9.25 19.503c-5 1.498-5-2.496-7-2.996",
    ],
  },
  {
    media: "linkedIn",
    svgs: [
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      "M2 9h4v12H2z",
      "M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z",
    ],
  },
  {
    media: "twitter",
    svgs: [
      "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z",
    ],
  },
];
const buildSocialMediaUrl = (handle: string, media: SocialMedia) => {
  switch (media) {
    case "twitter":
      return `https://twitter.com/${handle}`;
    case "github":
      return `https://github.com/${handle}`;
    case "linkedIn":
      return `https://linkedin.com/in/${handle}`;
    default:
      throw new Error("No implementation for this platform");
  }
};

export { socialMediaSvgs, buildSocialMediaUrl };
