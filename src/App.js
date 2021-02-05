import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    const done = () => this.setState({ isLoading: false });

    // test code
    setTimeout(done, 6000);
  }

  render() {
    console.log('render');
    const { isLoading } = this.state;

    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
