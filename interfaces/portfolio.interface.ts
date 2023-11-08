export interface Portfolio{
    id: string;
    country: string;
    name: string;
    link: string | string[];
    tags: string[];
    socials: {
        twitter: string;
        github: string;
        linkedin: string;
    };
}[]