import React from 'react';

/* modules */
import { HashRouter, Route } from 'react-router-dom';

/* components */
import Home from './routes/Home';
import About from './routes/About';

/* css */
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
};

export default App;
