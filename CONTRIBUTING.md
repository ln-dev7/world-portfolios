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
​    id: n,
​    name: "John Doe",
​    link: "https://johndoe.com",
​    tags: ["FrontEnd", "Backend"]

  },
  {
​    id: n+1,
​    name: "Your name",
​    link: "https://your-website.com",
​    tags: ["", "", ...]
  },
]
```

***Tags are not the technologies used but rather the areas in wich you are***

#### 5. Commit changes and push the new branch.

#### 6. Open and submit a PR.

