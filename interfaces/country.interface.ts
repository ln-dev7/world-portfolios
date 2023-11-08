import CountryData from "./countryData.interface";

export default interface Country {
  name: string;
  code: string;
  numberCode: string;
  flag: string;
  portfolios: CountryData[];
}
