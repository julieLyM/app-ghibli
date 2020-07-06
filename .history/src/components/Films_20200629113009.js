import React, { Component } from 'react';
import { getFilmsSrv } from '../service/data';
import { Link } from 'react-router-dom';
import { ContainerFilms, ContainerByFilm } from './style/filmStyle';

export default class Films extends Component {
  state = {
    films: [],
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
    const { films } = this.state;
    return (
      <div>
        <h1>films</h1>
        <ContainerFilms>
          {films.map((element, i) => (
            <ContainerByFilm key={i}>
              <Link to={`/films/${element.id}`}>{element.title}</Link>
            </ContainerByFilm>
          ))}
        </ContainerFilms>
      </div>
    );
  }
}
