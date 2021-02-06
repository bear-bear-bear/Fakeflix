import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    startTime: Date.now(),
    isLoading: true,
    movies: [],
  };

  APIs = {
    movieList: 'https://yts-proxy.now.sh/list_movies.json',
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
    const { isLoading } = this.state;
    this.appTimer(); // Time test code

    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
