import './App.css'
import { useState, useEffect } from 'react'
import { MoviesType } from './common/types'
import Movies from './components/Movies'

const App: React.FC = () => {
  const [movies, setMovies] = useState<MoviesType>([])

  useEffect(() => {
    fetch('http://yts.mx/api/v2/list_movies.json?sort_by=rating', { mode: 'no-cors' })
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  console.log(movies)
 
  return (
    <>
      <Movies movies={movies} />
    </>
  )
}

export default App
