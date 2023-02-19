# How to add your portfolio

#### 1. Fork this repository

Visit the [repository](https://github.com/ln-dev7/cameroon-porfolios) on Github and click here

![fork project](https://cameroon-portfolios.vercel.app/assets/contribut/1.png)

#### 2. Clone your new repository to your system.

#### 3. Create a new branch (i.e. `add/your-name`).

#### 5. Go to the `src/data/data.js` and edit this file

This file contains an array of objects where each object represents a portfolio, so it will be for you to add an object to this table following the timeline ...

```
const data = [
  ...,
  {
​    name: "John Doe",
​    link: "https://johndoe.com",
​    tags: ["FrontEnd", "Backend"],
    socials: {
      Twitter: "johndoe",
      Github: "johndoe",
      LinkedIn: "johndoe",
    },
  },
  {
​    name: "Your name",
​    link: "https://your-website.com",
​    tags: ["", "", ...],
    socials: {
      Twitter: "yourname",
      Github: "yourname",
      LinkedIn: "yourname",
    },
  },
]
```

##### Notes:

**_=>"name, link, tags" are mandatory !_**

**_=> Tags are not the technologies used but rather the areas in wich you are_**

**_=> Please, always add the "https://" on the link of your portfolio_**

**_=> On the social networks part, we don't want all the link to your profile, we just want the user-name (in the example below it's "johndoe")_**

```
      Twitter: "johndoe",
      Github: "johndoe",
      LinkedIn: "johndoe",
```

**_=> If you do not want to fill in one of your social networks, please leave the field empty like this:_**

```
    socials: {
      Twitter: "",
      Github: "johndoe",
      LinkedIn: "",
    },
```

**_Or_**

```
    socials: {
      Twitter: "",
      Github: "",
      LinkedIn: "",
    },
```

#### 5. Commit changes and push the new branch.

#### 6. Open and submit a PR.
