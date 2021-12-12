import React from 'react'
import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom'
const Post = () => {
  const params = useParams()
  const navigate = useNavigate()

  const status = 200

  if (status === 404) {
    return <Navigate to="/notfound" />
  }
  const onClick = () => {
    console.log('hello')
    navigate('/post/show')
  }
  return (
    <div>
      {/* Post {params.id} {params.name} */}
      <h1>Post</h1>
      <button onClick={onClick}>CLick</button>
      <Routes>
        <Route path="/show" element={<h1>Ugnezdena ruta</h1>} />
      </Routes>
    </div>
  )
}

export default Post
