import React, { Suspense } from 'react'
// import { Route, Switch, Redirect } from "react-router-dom";
import { Routes, Route, Navigate, Link } from 'react-router-dom'

import LoadingSpinner from './components/UI/LoadingSpinner'
import Layout from './components/layout/Layout'

const AllQuotes = React.lazy(async () => await import('./pages/AllQuotes'))
const QuoteDetail = React.lazy(async () => await import('./pages/QuoteDetail'))
const NewQuote = React.lazy(async () => await import('./pages/NewQuote'))
const NotFound = React.lazy(async () => await import('./pages/NotFound'))
const Comments = React.lazy(async () => await import('./components/comments/Comments'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />

          <Route path='/quotes' element={<AllQuotes />} />

          <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
            <Route
              path=''
              element={
                <div className='centered'>
                  <Link className='btn--flat' to={'comments'}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={'comments'} element={<Comments />} />
          </Route>

          <Route path='/new-quote' element={<NewQuote />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
