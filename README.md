# <Your-Project-Title>Reactive Proverbs

## Description
---

This Multi Page Application collects and stores interesting phrases and sayings I came across.

- The purpose of this project is to build something useful and interesing.
- By creating this app I practiced using TypeScript, React Router and Jest.

Live version at: https://quotes-app-a62b0.web.app

## Table of Contents (Optional)
---

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## General Information
---

- Quotes are rendered as a list that can be sorted in ascending or descending order.
- A single quote post consists of a text body and name.
- Comments can be added to already existing quotes.

## Technologies Used
---

- [React v18](https://reactjs.org/) as front-end library.
- [TypeScript](https://www.typescriptlang.org/) for better tooling and type safety.
- [React Router](https://reactrouter.com/) for client side routing.
- [Jest](https://jestjs.io/) for testing framework.
- Custom React hooks for fetching and posting data to the Firebase API

## Features
---

- Created with the [create-react-app](https://github.com/facebook/create-react-app) tool.
- Linting done with [ESLint](https://github.com/eslint/eslint).
- Features a simple form for submitting quotes.
- User can add comments to single quotes by entering the 'View Fullscreen' route.
- Simple & Dark UI

## Screenshots
---

All Quotes List
![All Quotes](assets/images/all-quotes.png)

Add Quote Form
![Add Quote Form](assets/images/add-quote.png)

Single Quote Route
![Single Quote Route](assets/images/single-quote.png)

Quote Comment Form
![Quote Comment Form](assets/images/quote-comment.png)

## Usage and Setup
---

To run this project locally, download the repository and open it inside terminal in your editor. Following commands are available:

- `npm install` to install all required dependencies (creates /node_modules folder).
- `npm run start` to run a server which reloads the page as files are being saved. Typically the server runs at http://localhost:3000
- `npm run test` to test all files whose extensions end in `.test.ts`. Jest will automatically run as soon as it detects changes. It can be run side by side with the development server so that changes can be previewed and tested at the same time.
- `npm run build` will create an optimized JS and CSS build in `./build/` folder in the root directory.