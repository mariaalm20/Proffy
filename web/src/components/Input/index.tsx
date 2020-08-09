import React, {InputHTMLAttributes} from 'react'

import {
   InputBlock,
   Label,
  } from './styles'

  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
  }

const Input: React.FC<InputProps> = ({
  label,
  name,
  ...rest
}) => {

  return (
    <InputBlock>  
    <Label htmlFor={name}>{label}</Label>
    <input
      type="text"
      id={name}
      {...rest}
    />
  </InputBlock>
  )
}

export default Input

