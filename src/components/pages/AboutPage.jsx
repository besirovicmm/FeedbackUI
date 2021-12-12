import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div>
        <h1>This is react app to leave feedback</h1>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
