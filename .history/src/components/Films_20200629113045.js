import React, { Component } from 'react';
import { getFilmsSrv } from '../service/data';
import { Link } from 'react-router-dom';
import { ContainerFilms, ContainerByFilm } from './style/filmStyle';
import { getFilmByIdSrv } from '../service/data';

export default class Films extends Component {
  state = {
    films: [],
    film: [],
  };

  componentDidMount() {
    this.fetchFilms();
    this.fetchPeopleDetail();
  }

  async fetchFilms() {
    const getFilm = await getFilmsSrv();
    this.setState({
      films: getFilm,
    });
  }

  fetchPeopleDetail = async () => {
    const data = await getFilmByIdSrv(this.props.match.params.id);
    this.setState({
      film: data,
    });
  };

  render() {
    const { films, film } = this.state;
    return (
      <div>
        <h1>films</h1>
        <ContainerFilms>
          {films.map((element, i) => (
            <ContainerByFilm key={i}>
              <Link to={`/films/${element.id}`}>
                {element.title}

                <p> {film.title}</p>
                <p> {film.description}</p>
                <p> {film.director}</p>
                <p> {film.producer}</p>
              </Link>
            </ContainerByFilm>
          ))}
        </ContainerFilms>
      </div>
    );
  }
}
