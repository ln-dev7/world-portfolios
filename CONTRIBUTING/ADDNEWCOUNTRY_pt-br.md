O objetivo é apenas acrescentar o maior número possível de países à lista

### **Diretrizes**

1. Certifique-se de que o país que deseja adicionar não esteja na lista, verifique em: `/countries/countries.ts`
2. Caso não exista, a primeira coisa é adicioná-lo à tabela `countries` que está em `/countries/countries.ts`
3. Acesse `/public/assets/images` e crie uma pasta que terá o código (abreviatura) do país, por exemplo: se o país for Camarões você terá que criar um código `cm` , se o país for Itália será `it`
4. Na pasta que você acabou de criar você deve adicionar a bandeira do seu país, ela deve ter a extensão `.png` e deve ser chamada `flag` , basicamente `flag.png`
5. No mesmo arquivo, você deve criar um arquivo `card-portfolio.png` que representará o cartão do país. Para isso, você deve acessar este [arquivo do Figma](https://www.figma.com/file/ngoeT9LWuEcmkGWIUBO260/World-Portfolios?type=design&node-id=4-5&mode=design&t=jHaj9cThsC03JQJ6-0) para gerar o cartão em questão. Se você tiver problemas para criar o cartão no figma, [deixe uma mensagem para mim no twitter](https://twitter.com/ln_dev7) (Ao enviar a mensagem, seja explícito e me diga qual país deseja adicionar e eu criarei o cartão correspondente, depois enviarei para você)
> Para modificar o arquivo figma você deve duplicá-la em seu rascunho antes de começar editá-lo
<img width="1440" alt="Capture d’écran 2023-07-17 à 11 20 32" src="https://github.com/ln-dev7/world-portfolios/assets/62269693/7d096632-7bb7-464f-8b24-ae5333cc248d">

6. Acesse o `/data` e crie um arquivo `[codeCountry]Data.ts`. Por exemplo, se o país for a França você terá que criar um `frData.ts` , se for a Alemanha será `deData.ts` 
7. Neste arquivo escreva isto:
```ts
import type CountryData from "@/interfaces/countryData.interface";

const [codeCountry]Data: CountryData[] = [];

export default [codeCountry]Data;
```
Um exemplo se você adicionar a Alemanha, será esse tipo:
```ts
import type CountryData from "@/interfaces/countryData.interface";

const deData: CountryData[] = [];

export default deData;
```

> Se quiser aproveitar para adicionar um portfólio à lista, aconselho que termine primeiro com esta questão que é a adição de um país e depois siga [este guia](../CONTRIBUTING/CONTRIBUTING_pt-br.md).
8. Acesse o `/app` e crie uma pasta chamada `[countryCode]` e nesta pasta você cria um arquivo `page.tsx` e neste arquivo adicione este código:
```tsx
"use client";

import CardList from "@/components/CardList";
import TagList from "@/components/TagList";
import NavBar from "@/components/Navbar";
import Section from "@/components/Section";
import Top from "@/components/ToTop";
import extractTags from "@/utils/extractTags";
import Footer from "@/components/Footer";
import MainLogic from "@/utils/mainLogic";
import [countryCode]Data from "@/data/[countryCode]Data";
import { Metadata } from "next";

export default function [CountryCode]() {
  const { filteredData, selectedTags, setTag, filterByName } =
    MainLogic([countryCode]Data);

  return (
      <div className="App">
        <Top />
        <NavBar onChangeValue={filterByName} />
        <Section />
        <main className="main">
          <div className="main-container">
            <aside className="main-container-aside">
              <TagList
                filteredData={filteredData}
                tags={extractTags([countryCode]Data)}
                setTag={setTag}
                selectedTags={selectedTags}
              />
            </aside>
            <div className="main-container-body">
              <CardList filteredData={filteredData} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}
```
> Substitua `[countryCode]` pelo código do país e `[countryName]` pelo nome do país.
9. **Prontinho! Agora você dar um push e enviar sua solicitação de pull request**
