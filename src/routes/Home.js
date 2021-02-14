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
    isFirstFetch: true,
    movies: [],
    page: 1,
  };

  getMovies = async () => {
    const limit = 50;
    const { movies, page } = this.state;

    const {
      data: {
        data: { movies: newMovies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?limit=${limit}&page=${page}&sort_by=rating`
    );

    this.setState({
      isLoading: false,
      isFirstFetch: page === 1 ? true : false,
      movies: [...movies, ...newMovies],
      page: page + 1,
    });
  };

  componentDidMount() {
    this.getMovies();
    infinityScroll.on(() => this.getMovies());
  }

  componentWillUnmount() {
    infinityScroll.off();
  }

  render() {
    const { isLoading, isFirstFetch, movies, page } = this.state;

    const MovieList = () => {
      return (
        <div className={isFirstFetch ? 'movies movies--first-call' : 'movies'}>
          {movies.map((movie) => {
            return (
              <Movie
                key={`page${page}_${movie.id}`}
                id={movie.id}
                title={movie.title}
                poster={movie.large_cover_image}
              />
            );
          })}
        </div>
      );
    };

    // return <section className="home">{isLoading ? <Loading /> : <Loading />}</section>;
    return <section className="home">{isLoading ? <Loading /> : <MovieList />}</section>;
  }
}

export default Home;
