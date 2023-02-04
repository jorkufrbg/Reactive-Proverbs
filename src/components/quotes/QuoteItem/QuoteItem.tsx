import { Link } from 'react-router-dom'
import classes from './QuoteItem.module.scss'

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
          Add Comment
      </Link>
    </li>
  )
}

export default QuoteItem
