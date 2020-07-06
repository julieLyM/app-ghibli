import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getPeoplesSrv } from '../service/data';

import {
  ContainerFilms,
  ContainerByFilm,
  PageFilms,
  FilmTitle,
} from './style/filmStyle';

export default class Peoples extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    this.fetchPeoples();
  }

  fetchPeoples = async () => {
    const data = await getPeoplesSrv();
    this.setState({
      results: data,
    });
  };
  render() {
    const { results } = this.state;
    return (
      <PageFilms>
        <FilmTitle>studio Ghibli</FilmTitle>
        <ContainerFilms>
          <h3>characters home</h3>
          {results.map((element, i) => (
            <ContainerByFilm key={i}>
              <Link to={`/characters/${element.id}`}>
                <p>{element.name}</p>
              </Link>
            </div>
          ))}
        </ContainerFilms>
      </PageFilms>
    );
  }
}
