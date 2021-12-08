import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

import { useState } from 'react'
import data from './data/data'

const App = () => {
  const [feedback, setFeedback] = useState(data)
  return (
    <>
      <Header />
      <div className="container">
        <h1>App</h1>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
