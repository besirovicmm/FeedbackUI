import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'

import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
    </FeedbackProvider>
  )
}

export default App
