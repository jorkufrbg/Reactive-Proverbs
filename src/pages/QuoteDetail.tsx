import { Fragment, useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote/HighlightedQuote'

import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner'

const QuoteDetail = () => {
  const params = useParams<{ quoteId: string }>()
  const { quoteId } = params

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

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

  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
    </Fragment>
  )
}

export default QuoteDetail
