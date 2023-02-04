import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm/QuoteForm'
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
    <div id='new-quote'>
      <h2 className='center'>Share some wisdom!</h2>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </div>
  )
}

export default NewQuote
