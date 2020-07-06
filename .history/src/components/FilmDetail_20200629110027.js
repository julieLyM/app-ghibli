import React, { Component } from 'react';
import { getFilmByIdSrv } from '../service/data';

export default class FilmDetail extends Component {
  state = {
    film: [],
  };

  componentDidMount() {
    this.fetchPeopleDetail();
  }

  fetchPeopleDetail = async () => {
    const data = await getFilmByIdSrv(this.props.match.params.id);
    this.setState({
      film: data,
    });
  };

  render() {
    const { film } = this.state;
    return (
      <div>
        <p> {film.title}</p>
        <p> {film.description}</p>
        <p> {film.director}</p>
        <p> {film.producer}</p>
        <p>hello</p>
      </div>
    );
  }
}
