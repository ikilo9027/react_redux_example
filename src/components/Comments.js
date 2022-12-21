import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../redux'

const Comments = (props) => {
  const { fetchComments, loading, comments } = props

  useEffect(() => {
    fetchComments()
  }, [])

  const commentsItems = loading ? (<div>is loading...</div>) : (
    // <div>가나다라</div>
    comments.map(comment => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  )

  return (
    <div className="comments" >
      {commentsItems}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { comments } = state
  return {
    comments: comments.items
  }
}

const mapDispatchToProps = {
  fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)