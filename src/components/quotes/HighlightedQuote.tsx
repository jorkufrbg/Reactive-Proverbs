import classes from './HighlightedQuote.module.css'

interface HighlightedQuoteProps {
  author: string
  text: string
}

const HighlightedQuote = (props: HighlightedQuoteProps) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  )
}

export default HighlightedQuote
