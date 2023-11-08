import CountryData from "./countryData.interface";

export interface GroupedDataByCountry{
    id:number,
    country:string,
    portfolios:CountryData[]
}