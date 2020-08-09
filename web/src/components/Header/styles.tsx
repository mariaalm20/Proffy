import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-primary);


  @media(min-width: 700px){
    height: 340px;
  }
`;
export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  padding: 1.6rem 0;


  @media(min-width: 700px){
    max-width: 1100px;
  }
`;

export const Back = styled(Link)`
  height: 3.2rem;
  transition: opacity 0.2s;

  &:hover: 1.6rem;
`
export const Logo = styled.img`
 height: 1.6rem;
`;
export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;


  @media(min-width: 700px){
    flex:1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Title = styled.h1`
  font: 700 3.6rem Archivo;
  line-height: 6.2rem;
  color: var(--color-title-in-primary);


  @media(min-width: 700px){
    max-width: 350px;
  }
`;

export const Description = styled.p`
 max-width: 30rem;
 font-size: 1.6rem;
 line-height: 2.6rem;
 color: var(--color-text-in-primary);
 margin-top: 2.4rem;
`