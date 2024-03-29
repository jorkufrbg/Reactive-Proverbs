interface Quote {
  id: string
  text: string
  author: string
}

const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE_DOMAIN_API_KEY

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

export async function getSingleQuote(quoteId: string) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.')
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  }

  return loadedQuote
}

export async function addQuote(quoteData: any) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.')
  }

  return null
}

export async function addComment(requestData: { quoteId: string; commentData: string }) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.')
  }

  return { commentId: data.name }
}

export async function getAllComments(quoteId: string) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`)

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.')
  }

  const transformedComments = []

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    }

    transformedComments.push(commentObj)
  }

  return transformedComments
}
