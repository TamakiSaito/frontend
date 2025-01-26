import { MoviesProps } from '../../common/types'
import './styles.css'

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  const changeToHHMM = (mins: number) => {
    let h: number | string = Math.floor(mins / 60);
    let m: number | string = mins % 60;
    return `${h}h ${m}min`;  
  }
  
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div>{movie.title}({movie.year})</div>
          <div className={movie.rating >= 9 ? 'good' : movie.rating >= 7 ? 'soso' : 'bad' }>
            Rating: {movie.rating} / 10
          </div>
          <div>Genres: {movie.genres.join(", ")}</div>
          <div>Runtime: {changeToHHMM(movie.runtime)}</div>
        </div>
      ))}
    </div>
  )
}

export default Movies;
