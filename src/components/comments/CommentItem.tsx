import classes from './CommentItem.module.css'

interface CommentItemProps {
  text: string
}

const CommentItem = (props: CommentItemProps) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  )
}

export default CommentItem
