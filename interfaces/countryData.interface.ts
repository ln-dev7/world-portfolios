export default interface CountryData {
  name: string;
  link: string | string[];
  tags: string[];
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}
