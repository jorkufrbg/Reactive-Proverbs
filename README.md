<p align="center">
  <img src="assets/images/reactive-quotes-demo.gif">
</p>

<br/>

## Table of Contents 
---
- Reactive Proverbs
  - [General Information](#general-information)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Folder structure](#folder-structure)
  - [Usage and Setup](#usage-and-setup)
  - [Code Samples](#usage-and-setup)

<br/>

## General Information
---
This Multi-Page Application collects and stores interesting quotes and phrases I came across. Another feature is the ability to add comments to single quote posts. Feel free to drop some words of wisdom!
  
Live version can be viewed [here!](https://quotes-app-a62b0.web.app)

<br/>

## Features
---

- Quotes are rendered as a list that can be sorted in ascending or descending order.
- Features simple forms for submitting quotes and comments.
- Custom hooks for interacting with the Firebase API.
- Single quotes can be expanded in Fullscreen, and comments can be added
- Simple & Dark UI

<br/>

## Technologies used
---
- [React v18](https://reactjs.org/) for the frond-end.
- [TypeScript](https://www.typescriptlang.org/) for better tooling and type safety.
- [React Router](https://reactrouter.com/) for client side routing.
- [Firebase](https://firebase.google.com/) for back-end.
- [Jest](https://jestjs.io/) for tests.
- [ESLint](https://github.com/eslint/eslint) for linting.
- [create-react-app](https://github.com/facebook/create-react-app) for quick and painless setup.

<br/>

## Folder structure :
---
This project has the following folder structure:
```text
Reactive-Proverbs/
├─ assets
│  └─ images
├─ build/
├─ node_modules/
├─ public/
├─ src/
│  └─ components
│  └─ hooks
│  └─ lib
│  └─ pages
│  └─ ...
├─ package.json
├─ tsconfig.json
├─ .eslintrc.json
└─ .gitignore
```

**Of note:**
* `tsconfig.json` contains TypeScript-specific options for the project.
* `.eslintrc.json` stores the settings for the linter.
* `package.json` contains package dependencies, and commands used to run tests, development server, and deployment.
* `public` contains static assets like the HTML page to be deployed.
* `src` contains the TypeScript and CSS code.
*  `index.tsx` is the entry-point.

<br/>

## Usage and Setup
---

To run this project locally, download the repository and open it inside terminal in your editor. Following commands are available:

- `npm install` to install all required dependencies (creates /node_modules folder).
- `npm run start` to run a server which reloads the page as files are being saved. Typically the server runs at http://localhost:3000
- `npm run test` to test all files whose extensions end in `.test.ts`. Jest will automatically run as soon as it detects changes. It can be run side by side with the development server so that changes can be previewed and tested at the same time.
- `npm run build` will create an optimized JS and CSS build in `./build/` folder in the root directory.

<br/>

## Code Samples
---
####Quote Item Component
The `QuoteItem.tsx` renders the quote text and author. Additionally there is the 'View Fullscreen' link, that leads to the single quote page.

On the top of the page the Link element is imported. It lets the user navigate to another page by clicking on it. `react-router-dom` renders an accessible `<a>` element with a real `href` that points to the resource it's linking to.

Then styles are imported using CSS Modules.

Afterwards a type named QuoteItemProp is defined. It specifies the properties of the component. `text`, `author` and `id` are required strings.
```
import { Link } from 'react-router-dom'
import classes from './QuoteItem.module.css'

interface QuoteItemProps {
  text: string
  author: string
  id: string
}

const QuoteItem = (props: QuoteItemProps) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  )
}

export default QuoteItem
```



#####Custom Hooks (useHttp)

```

```