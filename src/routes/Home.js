/* modules */
import React from 'react';
import axios from 'axios';

/* components */
import Movie from '../components/Movie';

/* css */
import './Home.css';

class Home extends React.Component {
  state = {
    startTime: Date.now(),
    isLoading: true,
    movies: [],
  };

  APIs = {
    // 영화 리스트 평점 높은 순으로 정렬
    movieList: 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
  };

  appTimer = () => {
    const { startTime } = this.state;
    const endTime = Date.now();

    console.log(`렌더링 시간간격: ${endTime - startTime}ms`);

    this.startTime = endTime; // initial
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(this.APIs.movieList);

    this.setState({
      movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    this.appTimer(); // Time test code

    const Loading = () => {
      return (
        <div className="loader">
          <p className="loader__text">Loading...</p>
        </div>
      );
    };

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

    return <section className="container">{isLoading ? <Loading /> : <MovieList />}</section>;
  }
}

export default Home;
