import styled from 'styled-components';
// import { device } from './mediaQueries';

export const ContainerFilms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 300px;
`;
export const ContainerByFilm = styled.div`
  width: 80px;
  height: 100px;
  background-color: blue;
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
