import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 16px;
  list-style-type: none;
  text-decoration: none;
  padding-bottom: 10px;
`;

export const CardWrapper = styled.ul`
  position: relative;
  transition: 0.5s linear;
  border-radius: 8px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const Image = styled.img`
  display: block;
  width: 280px;
  height: 360px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const MoviesName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
`;
