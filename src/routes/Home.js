/* modules */
import React from 'react';
import axios from 'axios';

/* components */
import Movie from '../components/Movie';
import Loading from '../components/Loading';

/* css */
import './Home.css';

class Home extends React.Component {
  state = {
    startTime: Date.now(),
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=50&sort_by=rating');

    this.setState({
      movies: movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    const MovieList = () => {
      return (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      );
    };

    return (
      <section className="home">{isLoading ? <Loading msg="Loading..." /> : <MovieList />}</section>
    );
  }
}

export default Home;
