/* modules */
import React from 'react';
import axios from 'axios';
import infinityScroll from '../lib/infinityScroll';

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

  fetchFunc = () => {
    console.log('fetch');
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

  componentWillUnmount() {
    infinityScroll.off();
  }

  render() {
    const { isLoading, movies } = this.state;
    if (!isLoading) infinityScroll.on(() => this.fetchFunc());

    const MovieList = () => {
      return (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.large_cover_image}
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
