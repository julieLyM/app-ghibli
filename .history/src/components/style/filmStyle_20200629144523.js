import styled from 'styled-components';
// import { device } from './mediaQueries';

export const PageFilms = styled.div`
  background: URL('https://www.jrailpass.com/blog/wp-content/uploads/2020/04/studio-ghibli-theme-park-1280x720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const ContainerFilms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1 1 300px;
`;
export const ContainerByFilm = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 5px 20px 3px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  margin: 10px;
  width: 30%;
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3;
  -moz-animation: fadeIn ease 3;
  -o-animation: fadeIn ease 3;
  -ms-animation: fadeIn ease 3;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FilmTitle = styled.div`
  color: white;
  font-size: 30px;
  text-transform: uppercase;
`;

// export const CardCharacter = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin: 0px auto;
//   width: 50%;
//   background: rgba(0, 0, 0, 0.9);
//   border-radius: 10px;
//   padding: 2%;
//   flex-wrap: wrap;
//   @media (${device.tablet}) {
//     width: 100%;
//   }
//   @media (${device.mobileL}) {
//     background: none;
//   }
// `;
