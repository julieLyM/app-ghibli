import React, { Component } from 'react';
import { getFilmsSrv } from '../service/data';
import { Link } from 'react-router-dom';
import {
  ContainerFilms,
  ContainerByFilm,
  PageFilms,
  FilmTitle,
} from './style/filmStyle';

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
    return (
      <PageFilms>
        <FilmTitle>Studio Ghibli Movies</FilmTitle>
        <ContainerFilms>
          {films.map((element, i) => (
            <ContainerByFilm key={i}>
              {/* <Link to={`/films/${element.id}`}> */}
              <p>{element.title}</p>
              <p>{element.description}</p>
              <p>{element.director}</p>
              <p>{element.producer}</p>

              {/* </Link> */}
            </ContainerByFilm>
          ))}
        </ContainerFilms>
      </PageFilms>
    );
  }
}
