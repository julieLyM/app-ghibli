import React, { Component } from 'react';
import { getPeopleDetail, getPeopleByIdSrv } from '../service/data';
import { Link } from 'react-router-dom';

export default class PeopleDetail extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.fetchPeopleDetail();
  }

  fetchPeopleDetail = async () => {
    const characters = await getPeopleByIdSrv(this.props.match.params.id);
    this.setState({
      characters,
    });
  };

  // fetchPeopleDetail = async () => {
  //   const { people } = this.props.location.state;
  //   console.log(people);
  //   const { films } = await getPeopleDetail();
  //   this.setState({
  //     films,
  //   });
  // };

  render() {
    const { characters } = this.state;
    return (
      <div>
        <p> {characters.name}</p>
        <p> {characters.age}</p>
        <p> {characters.eye_color}</p>
        <p> {characters.gender}</p>
        <p>
          <Link to={characters.films} to={`/films/${characters.films}`}>{characters.films}</Link>
        </p>
      </div>
    );
  }
}

// <Films films={this.state.films} />
// <li>{this.props.people.name}</li>
//  <li>{people.gender}</li>
// <li>{people.eye_color}</li>
// <li>
//   <a href={`${this.props.people.films}`}>Films</a> */}
// </li>
