import styled from 'styled-components'


export const Main = styled.div`
margin: 3.2rem auto;
width: 90%;

@media(min-width: 700px){
  padding: 3.2rem;
  max-width: 740px;
  margin: 0 auto;
}
`
export const TeacherItem = styled.article`
background: var(--color-box-base);
border: 1px solid var(--color-line-in-white);
border-radius: 0.8rem;
margin-top: 2.4rem;
overflow: hidden;
`
export const NameTeacher = styled.strong`
font: 700 2.4rem Archivo;
display: block;
color: var(--color-text-title);
`
export const Materia = styled.span`
font-size: 1.6rem;
display: block;
margin-top: 0.4rem;
`
export const HeaderList = styled.div`
padding: 3.2rem 2rem;
display: flex;
align-items: center;

>img{
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}

@media(min-width: 700px){
  padding: 3.2rem;
}
`

export const InformationTeacher = styled.div`
margin-left: 2.4rem;
`
export const Description = styled.p`
padding: 0 2rem;
font-size: 1.6rem;
line-height: 2.8rem;

@media(min-width: 700px){
  padding: 0 3.2rem;
}
`
export const Footer = styled.div`
padding: 3.2rem 3.2rem;
background: var(--color-box-footer);
border-top: 1px solid var(--color-line-white);
margin-top: 3.2rem;
display: flex;
align-items: center;
justify-content: space-between;

@media(min-width: 700px){
padding: 3.2rem;
}
`
export const TitlePrice = styled.div``
export const Price = styled.strong`
color: var(--color-primary);
font-size: 1.6rem;
display: block;

@media(min-width: 700px){
display: initial;
margin-left: 1.6rem;
}
`
export const ButtonWhats = styled.a`
width: 20rem;
height: 5.6rem;
background: var(--color-secundary);
color: var(--color-button-text);
border: 0;
border-radius: 0.8rem;
padding: 0 20px;

cursor: pointer;
font: 700 1.4rem Archivo;

display: flex;
align-items: center;
justify-content: space-evelyn;
transition: 0.2s;

>img{
  margin-right: 10px;
}

&:hover {
  background:var(--color-secundary-dark);
}

@media(min-width: 700px){
  width: 24.5rem;
  font-size: 1.6rem;
  justify-content: center;

  >img{
    margin-right: 1.6rem;
  }
}
`

