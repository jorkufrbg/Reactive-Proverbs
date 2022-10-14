# <Your-Project-Title>Reactive Proverbs

## Description
---

This Multi Page Application collects and stores interesting phrases and sayings I came across. The purpose of this project is to build something useful and interesing.

- Quotes are rendered as a list that can be sorted in ascending or descending order.
- A single quote consists of text body and name.
- Comments can be added to already existing quotes.
  
Live version can be seen at: https://quotes-app-a62b0.web.app

## Table of Contents (Optional)
---
- Reactive Proverbs
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Usage and Setup](#usage-and-setup)


## General Information
---
Folder structure description:

* `tsconfig.json` contains TypeScript-specific options for the project.
* `.eslintrc.json` stores the settings for the linter.
* `package.json` contains dependencies, shortcuts for commands used to run tests, preview, and deployment.
* `public` contains static assets like the HTML page to be deployed.
* `src` contains the TypeScript and CSS code. `index.tsx` is the entry-point.

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

## Technologies Used
---
- [React v18](https://reactjs.org/) as front-end library.
- [TypeScript](https://www.typescriptlang.org/) for better tooling and type safety.
- [React Router](https://reactrouter.com/) for client side routing.
- [Jest](https://jestjs.io/) for testing framework.
- [Firebase](https://firebase.google.com/) for back-end.

## Features
---

- Created with the [create-react-app](https://github.com/facebook/create-react-app) tool.
- Linting done with [ESLint](https://github.com/eslint/eslint).
- Custom React hooks for fetching and posting data to the Firebase API
- Features a simple form for submitting quotes.
- User can add comments to single quotes by entering the 'View Fullscreen' route.
- Simple & Dark UI

## Screenshots
---

![ReactiveProverbs Gif](assets/images/reactive-quotes-demo.gif)

## Usage and Setup
---

To run this project locally, download the repository and open it inside terminal in your editor. Following commands are available:

- `npm install` to install all required dependencies (creates /node_modules folder).
- `npm run start` to run a server which reloads the page as files are being saved. Typically the server runs at http://localhost:3000
- `npm run test` to test all files whose extensions end in `.test.ts`. Jest will automatically run as soon as it detects changes. It can be run side by side with the development server so that changes can be previewed and tested at the same time.
- `npm run build` will create an optimized JS and CSS build in `./build/` folder in the root directory.

## Code Examples
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