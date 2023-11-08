export interface Portfolio{
    id: number;
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