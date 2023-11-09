# Como adicionar seu portfólio

#### 1. Bifurque (fork) este repositório

Visite o [repositório](https://github.com/ln-dev7/world-portfolios) no github e clique aqui

![fork project](https://wp.lndev.me/assets/contribut/1.png)

#### 2. Clone o novo repositório em seu sistema.

#### 3. Crie uma nova branch (`add/seu-nome`).

#### 4. Procure o código ISO de seu país, por exemplo, para `Cameroon` é `cm`, para `France` é `fr`... Depois de encontrá-lo ...

#### 5. Vá para o `data/[codeOfYourCountry]Data.ts` ( `cmData.ts`, `frData.ts` )

#### Se você não encontrar o arquivo correspondente ao código do seu país

Significa apenas que ele ainda não foi adicionado à nossa lista, portanto, você pode [escrever para mim em particular](https://twitter.com/ln_dev7) ou você pode [acompanhe esta issue](https://github.com/ln-dev7/world-portfolios/issues/108) para adicionar seu país

#### Se você vir o arquivo correspondente ao código de seu país, abra-o e edite o arquivo

Esse arquivo contém uma matriz de objetos em que cada objeto representa um portfólio, portanto, caberá a você adicionar um objeto a essa tabela seguindo os padrões ...

```
const cmData = [
  ...,
  {
​    name: "John Doe",
​    link: "https://johndoe.com",
​    tags: ["FrontEnd", "Backend"],
    socials: {
      twitter: "johndoe",
      github: "johndoe",
      linkedin: "johndoe",
    },
  },
  {
​    name: "Your name",
​    link: "https://your-website.com",
​    tags: ["", "", ...],
    socials: {
      twitter: "yourname",
      github: "yourname",
      linkedin: "yourname",
    },
  },
]
```

##### Notas:

**_=>"name, link, tags" são obrigatórios !_**

**_=> Tags não são as tecnologias usadas, mas sim as áreas em que você está trabalhando no momento_**

**_=> Por favor, sempre adicione o "https://" no link de seu portfólio_**

**_=> Na parte das redes sociais, não queremos todos os links para o seu perfil, queremos apenas o nome de usuário (no exemplo abaixo, é "johndoe")_.**

```
      twitter: "johndoe",
      github: "johndoe",
      linkedin: "johndoe",
```

**_=> Se não quiser preencher uma de suas redes sociais, deixe o campo em branco da seguinte forma:_**

```
    socials: {
      twitter: "",
      github: "johndoe",
      linkedin: "",
    },
```

**_Ou_**

```
    socials: {
      twitter: "",
      github: "",
      linkedin: "",
    },
```

#### 6. Faça o commit das alterações e dê um push na nova Branch.

#### 7. Abra uma solicitação e envie um Pull Request (PR).
