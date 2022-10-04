import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes')
    }
  }, [status, navigate])

  const addQuoteHandler = (quoteData: any) => {
    sendRequest(quoteData)
  }

  return (
    <Fragment>
      <h2 className='center'>Share some wisdom!</h2>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </Fragment>
  )
}

export default NewQuote
