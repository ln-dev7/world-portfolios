The goal is just to add as many countries as possible to the list

### **Guidelines**

1. Make sure that the country you want to add does not already exist, check in: `/helpers/countries.ts`

2. If it does not exist, the first thing is to add it to the table `countries` present in `/helpers/countries.ts`.
The modified file should look like this : 
```ts
import type Country from "@/interfaces/country.interface";
import { cmData } from "@/data/cmData";
...
import { [code]Data } from "@/data/[code]Data";

const countries: Country[] = [
  ...,
  {
    name: "Your Country ",
    code: "Code of your country",
    numberCode: "Numero code of your country",
    flag: "/assets/images/[code]/flag.png",
    portfolios: [code]Data
  },
];

export default countries.sort((a, b) => a.name.localeCompare(b.name))
```

3. Go to `/public/assets/images` and create a folder that will have the country code name, for example : if the country is Cameroon you will have to create a `cm` folder if it is Italy it will be `it`

4. In the folder you just created you must add the flag of your country, it must have for extension a `.png` and it must be called `flag` so basically `flag.png`

5. In the same file, you must create a `card-portfolio.png` file that will represent the country card. To do this, you must go to this [figma file](https://www.figma.com/file/ngoeT9LWuEcmkGWIUBO260/World-Portfolios?type=design&node-id=4-5&mode=design&t=jHaj9cThsC03JQJ6-0) to generate the card in question. If you have trouble creating the card on figma, [leave me a message on twitter](https://twitter.com/ln_dev7) ( By sending me the message, be explicit and tell me which country you want to add and I will create the corresponding card, then I will send you  )
> To modify the figma you must duplicate it in your draft before doing so
<img width="1440" alt="Capture d’écran 2023-07-17 à 11 20 32" src="https://github.com/ln-dev7/world-portfolios/assets/62269693/7d096632-7bb7-464f-8b24-ae5333cc248d">

6. Go to `/data` and create a `[codeCountry]Data.ts`. For example, if the country is France you will have to create a `frData.ts` file, if it is the allenagne it will be `deData.ts` 

7. In this file write this :
```ts
import type CountryData from "@/interfaces/countryData.interface";

const [codeCountry]Data: CountryData[] = [];

export {[codeCountry]Data};
```
An example if you add Germany will be :
```ts
import type CountryData from "@/interfaces/countryData.interface";

const deData: CountryData[] = [];

export {deData};
```

> If you want to take the opportunity to add a portfolio to the list, I suggest you follow these instructions : [follow this guide](https://github.com/ln-dev7/world-portfolios/blob/master/CONTRIBUTING.md).

8. **It’s over! You can push and submit your pull request**
