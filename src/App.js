/* modules */
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

/* components */
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Header from './components/Header';

/* css */
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
};

export default App;
