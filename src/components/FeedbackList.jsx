import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }
  return <div></div>
}

export default FeedbackList
