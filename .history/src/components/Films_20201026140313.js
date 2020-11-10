import React, { Component } from 'react';
import { getFilmsSrv, getPeopleByIdSrv } from '../service/data';
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
    peoples: [],
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

  async fetchPeople() {
    const getPeople = await getPeopleByIdSrv();
    this.setState({
      peoples: getPeople,
    });
  }

  render() {
    const { films, peoples } = this.state;
    console.log(this.state.peoples);
    return (
      <PageFilms>
        <FilmTitle>Studio Ghibli Movies</FilmTitle>
        <ContainerFilms>
          {films.map((element, i) => (
            <ContainerByFilm key={i}>
              <p>{element.title}</p>
              <p>{element.description}</p>
              <p>{element.producer}</p>
              <p>{element.release_date}</p>
            </ContainerByFilm>
          ))}
        </ContainerFilms>
      </PageFilms>
    );
  }
}
