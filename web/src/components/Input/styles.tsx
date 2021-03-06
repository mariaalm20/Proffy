import styled from 'styled-components'

export const InputBlock = styled.div`
position: relative;

&:focus-within::after{
  width: calc(100% - 3.2rem);
  height: 2px;
  content: '';
  background: var(--color-primary-light);
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0;
}

margin-top: 1.4rem;

  >input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    inline:0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }
`
export const Label = styled.label`
font-size: 1.3rem;
color: var(--color-line-in-white)
`
export const Input = styled.input``