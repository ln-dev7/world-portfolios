import { bjData } from "@/data/bjData";
import { brData } from "@/data/brData";
import { cdData } from "@/data/cdData";
import { ciData } from "@/data/ciData";
import { cmData } from "@/data/cmData";
import { frData } from "@/data/frData";
import { gaData } from "@/data/gaData";
import { idData } from "@/data/idData";
import { inData } from "@/data/inData";
import { krData } from "@/data/krData";
import { snData } from "@/data/snData";
import { tgData } from "@/data/tgData";
import { usData } from "@/data/usData";
import CountryData from "@/interfaces/countryData.interface";
import { GroupedDataByCountry } from "@/interfaces/groupedData.interface";
import { Portfolio } from "@/interfaces/portfolio.interface";

const loadData: GroupedDataByCountry[] = [
    {
        id: 1,
        country: "bg",
        portfolios: bjData
    },
    {
        id: 2,
        country: "br",
        portfolios: brData
    },
    {
        id: 3,
        country: "cd",
        portfolios: cdData
    },
    {
        id: 4,
        country: "ci",
        portfolios: ciData
    },
    {
        id: 5,
        country: "cm",
        portfolios: cmData
    },
    {
        id: 6,
        country: "fr",
        portfolios: frData
    },
    {
        id: 7,
        country: "ga",
        portfolios: gaData
    },
    {
        id: 8,
        country: "id",
        portfolios: idData
    },
    {
        id: 9,
        country: "in",
        portfolios: inData
    },
    {
        id: 10,
        country: "kr",
        portfolios: krData
    },
    {
        id: 11,
        country: "sn",
        portfolios: snData
    },
    {
        id: 12,
        country: "tg",
        portfolios: tgData
    },
    {
        id: 13,
        country: "us",
        portfolios: usData
    },
]


const portfolios:Portfolio[] = loadData.flatMap((groupedData, index) => {
    return groupedData.portfolios.map((portfolio, id) => {
        return {
            id: id + 1,
            country: groupedData.country,
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