import { v4 as uuidv4 } from 'uuid';
import { Portfolio } from "@/interfaces/portfolio.interface";
import countries from "./countries";

const portfolios:Portfolio[] = countries.flatMap((groupedData, index) => {
    return groupedData.portfolios.map((portfolio, id) => {
        return {
            id: uuidv4(),
            country: groupedData.code,
            name: portfolio.name,
            link: portfolio.link,
            tags: portfolio.tags,
            socials: {
                twitter: portfolio.socials.twitter,
                github: portfolio.socials.github,
                linkedin: portfolio.socials.linkedin,
            },
        };
    });
  });
  
  export { portfolios }