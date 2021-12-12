import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import { useState } from 'react'
import data from './data/data'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'

const App = () => {
  const [feedback, setFeedback] = useState(data)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete'))
      setFeedback(feedback.filter((item) => item.id !== id))
  }
  return (
    <Router>
      <Header />
      <Card>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/post" activeClassName="active">
          Ugnezdena ruta test
        </NavLink>
      </Card>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  handleDelete={deleteFeedback}
                  feedback={feedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
          <Route path="/post/*" element={<Post />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
