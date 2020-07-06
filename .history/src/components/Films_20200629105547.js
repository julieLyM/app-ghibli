import React, { Component } from 'react';
import { getFilmsSrv } from '../service/data';
import { Link } from 'react-router-dom';

export default class Films extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.fetchFilms();
  }

  async fetchFilms() {
    const getFilm = await getFilmsSrv();
    this.setState({
      films: getFilm,
    });
  }
  render() {
    const { films } = this.state;
    console.log({ films });
    return (
      <div>
        <h1>films</h1>
        <div>
          {films.map((element, i) => (
            <div key={i}>
              <Link to={`/films/${element.id}`}>{element}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
