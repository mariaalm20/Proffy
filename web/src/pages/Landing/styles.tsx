import styled from "styled-components";
import { Link } from "react-router-dom";

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  @media (max-width: 1100px) {
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    min-width: 1100px;
    display: grid;

    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;

    grid-template-areas:
      "logo hero hero"
      "button button total";
  }
`;

export const ContainerLogo = styled.div`
  margin-top: 25px;
  text-align: center;
  margin-bottom: 3.2rem;

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;
  }
`;
export const Logo = styled.img`
  height: 8rem;

  @media (min-width: 1100px) {
    height: 100%;
  }
`;

export const Description = styled.h1`
  font-weigth: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 2.6rem;


  @media (min-width: 1100px) {
    text-align: initial;
    font-size: 3.6rem;
  }
`;
export const ImageHero = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

  @media (min-width: 1100px) {
    grid-area: button;
    justify-content: flex-start;
  }
`;

export const ButtonStudy = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;
  margin-right: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  img {
    width: 4rem;
  }

  background: var(--color-primary-lighter);
  tansition: background-color 0.2s;

  &:hover {
    background: var(--color-primary-light);
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`;

export const ButtonGiveClasses = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  background: var(--color-secundary);
  tansition: background-color 0.2s;

  img {
    width: 4rem;
  }

  &:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`;
export const Total = styled.h3`
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
export const PurpleHeart = styled.img`
  margin-left: 0.8rem;
`;
