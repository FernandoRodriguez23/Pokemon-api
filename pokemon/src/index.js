import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import {PokemonProvider} from './util/context';
import {BrowserRouter as Router} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <Router>
        <App />
      </Router>
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

