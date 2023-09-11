export default interface UserProfile {
  name: string;
  link: string | string[];
  tags: string[];
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}
