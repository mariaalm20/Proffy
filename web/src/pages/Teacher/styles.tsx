import styled from "styled-components";

export const TeacherList = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;
`;

export const SearchTeacher = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Main = styled.div`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem;
    max-width: 740px;
    margin: 0 auto;
  }
`;

export const Filter = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color(0.2s);
  margin-top: 3.2rem;
  outline: 0;

  &:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 4.4rem;
  }
`;
