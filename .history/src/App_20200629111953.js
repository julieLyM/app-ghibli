import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Filmsdetail from './components/FilmDetail';
import Films from './components/Films';
import Peoples from './components/Peoples';
import PeopleDetail from './components/PeopleDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/characters" component={Peoples} />
        <Route exact path="/detail/:id" component={PeopleDetail} />
        <Route exact path="/films/" component={Films} />
        <Route exact path="/films/:id" component={Filmsdetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
