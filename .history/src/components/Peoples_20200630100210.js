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
        <h1>studio Ghibli</h1>
        <div style={{ border: '1px solid purple' }}>
          <h3>characters home</h3>
          {results.map((element, i) => (
            <div key={i}>
              <Link to={`/characters/${element.id}`}>
                <p>{element.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </PageFilms>
    );
  }
}
