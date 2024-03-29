import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import classes from './Comments.module.scss'
import NewCommentForm from '../NewCommentForm/NewCommentForm'
import useHttp from '../../../hooks/use-http'
import { getAllComments } from '../../../lib/api'
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner'
import CommentsList from '../CommentsList/CommentsList'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)
  const params = useParams<{ quoteId: string }>()
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)
  const { quoteId } = params

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true)
  }

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let comments

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments were added yet!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {comments}
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
    </section>
  )
}

export default Comments
