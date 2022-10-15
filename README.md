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
#### AllQuotes Component
The `AllQuotes.tsx` page renders a list of quote items.

For handling requests, we call the custom `useHttp` hook and the `getAllQuotes` function from the `api.js` file.

Inside the AllQuotes Component function we call `useHttp` and pass a pointer at  `getAllQuotes` to it. As a second argument we set `true`, for indicating that the component starts in loading state.

From the custom hook we extract the `sendRequest` function for sending the actual request, the request `status`,  request `data` and `error`.

By using the useEffect hook, we trigger the `sendRequest` function when the component renders.

Depending on the requests `status` we can render different states or elements eg. loading spinner, an error message and ultimately the `QuoteList`.

```
import { useEffect } from 'react'

import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes
```

<br/>

#### httpReducer function
`useReducer` just like `useState` returns an Array with two values. By using Array destructuring we can extract and save those values in separate constants.
Those values are the lates `state` snapshot and a function that dispatches an `action`, which in turn can trigger an update of the sate.

By dispatching an `action` it gets consumed by the first argument that is passed to `useReducer()`. This is called a reducer function, it receives the latest state snapshot and returns the new updated state.

Additionally we can set initial state.

Reducer functions can be defined outside of the component function, because they dont interact with anything defined inside of the component function.

Depending on the `action` dispatched, the reducer function returns a modified state snapshot.

```
import { useReducer, useCallback } from 'react'

function httpReducer(state: any, action: { type: string; responseData: any; errorMessage: any }) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    }
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    }
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    }
  }

  return state
}
```

<br/>

#### useHttp custom React Hook
Custom hooks are regular functions just like the built-in hooks (eg. useState), but they can also contain and outsource stateful logic into reusable functions. They have access to built-in hooks like `useEffect` and etc. When there is component logic that needs to be used by multiple components, we can extract that logic into a custom Hook. 

This custom hook handles sending requests to the Firebase API, evaluates the response and handles possible errors. It’s flexibility comes from being able to configure the requests logic: The `url`, `method`, `body` and `headers`.

This way we store the main logic inside the custom hook, but the data specific logic is stored inside the component that needs the data.

`useHttp` requires a function that can be called by the hook to send the actual request. Those functions are the ones defined in `api.js`.



The `sendRequest` function returns a Promise, which allows us to react to the response or possible errors. The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

After dispatching the 'SEND' action we set `responseData` and `errorMessage` to an empty or undefined value.

In case of successful response the `requestData` received from the `requestFunction` is stored in the `responseData` variable.
Afterwards the 'SUCCESS' action gets dispatched and  `responseData` is merged with the state object.
In case of an `error` we dispatch the 'ERROR' action, which sets the `errorMessage` to `error.message` or a default message.The useCallback Hook only runs when one of its dependencies update. In our casechanges in the`requestFunction`.

By encapsulating the `sendRequest` function with the `useCallback` hook we prevent an infinite loop.
The React useCallback Hook returns a memoized callback function which allows us to isolate resource intensive functions so that they will not automatically run on every render.


`useHttp` returns a function `sendRequest`, that sends the request and  `httpState`, which is an object containing the response `status`, `data` and `error`

```
function useHttp(requestFunction: any, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  })

  const sendRequest = useCallback(
    async function (requestData: any) {
      dispatch({
        type: 'SEND',
        responseData: undefined,
        errorMessage: undefined,
      })
      try {
        const responseData = await requestFunction(requestData)
        dispatch({
          type: 'SUCCESS',
          responseData,
          errorMessage: undefined,
        })
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: 'ERROR',
            errorMessage: error.message || 'Something went wrong!',
            responseData: undefined,
          })
        }
      }
    },
    [requestFunction],
  )

  return {
    sendRequest,
    ...httpState,
  }
}

export default useHttp
```

<br/>

#### api.tsx
`api.js` contains functions that will send requests to Firebase in conjunction with the custom `useHttp` hook.
Those are different functions for sending different kinds of requests. They also feature simple error handling.

For example the `getAllQuotes` function gets all quotes from Firebase and transforms them into an Array of objects that have the necessary structure and format .

```

const FIREBASE_DOMAIN = '#'

export async function getAllQuotes(): Promise<Quote[]> {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.')
  }

  const transformedQuotes = []

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    }

    transformedQuotes.push(quoteObj)
  }

  return transformedQuotes
}

```