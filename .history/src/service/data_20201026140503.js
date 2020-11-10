import axios from 'axios';

export async function getPeoplesSrv() {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/
  `);
  return data;
}

export async function getPeopleDetail({ films }) {
  const filmsPromise = films.map((film) => axios.get(film));
  return format(datas, films);
}

export async function getPeopleByIdSrv(id) {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/${id}
  `);
  console.log('service with id', data);
  return data;
}

export async function getFilmsSrv() {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/
  `);

  return data;
}

export async function getFilmByIdSrv(id) {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}
  `);
  return data;
}
