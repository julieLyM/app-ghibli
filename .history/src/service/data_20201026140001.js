import axios from 'axios';

export async function getPeoplesSrv() {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/
  `);
  return data;
}

function format(datas, films) {
  return {
    films: datas.slice(0, films.length),
    testFilm: datas.slice(films.length),
  };
}

export async function getPeopleDetail({ films, starships }) {
  const filmsPromise = films.map((film) => axios.get(film));
  const testPromise = testFilm.map((starship) => axios.get(starship));
  const datas = await Promise.all([...filmsPromise]);
  return format(datas, films);
}

export async function getPeopleByIdSrv(id) {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/${id}
  `);
  console.log(data);
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
