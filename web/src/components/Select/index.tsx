
import React, { SelectHTMLAttributes } from 'react';

import {
  SelectBlock,
  Label,
  Select
} from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const SelectComponent: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <SelectBlock>
      <Label htmlFor={name}>{label}</Label>
      <Select id={name} value="" {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>;
        })}
      </Select>
    </SelectBlock>
  );
}

export default SelectComponent;