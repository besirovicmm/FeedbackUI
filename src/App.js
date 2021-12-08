import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import { useState } from 'react'
import data from './data/data'

const App = () => {
  const [feedback, setFeedback] = useState(data)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete'))
      setFeedback(feedback.filter((item) => item.id !== id))
  }
  return (
    <>
      <Header />
      <div className="container">
        <h1>App</h1>
        <FeedbackStats feedback={feedback} />
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
      </div>
    </>
  )
}

export default App
