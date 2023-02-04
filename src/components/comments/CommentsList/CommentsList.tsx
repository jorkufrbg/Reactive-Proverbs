import CommentItem from '../CommentItem/CommentItem'
import classes from './CommentsList.module.scss'

interface CommentsListProps {
  comments: Array<{ id: string; text: string }>
}

const CommentsList = (props: CommentsListProps) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  )
}

export default CommentsList
