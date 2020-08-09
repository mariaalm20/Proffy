import React, { TextareaHTMLAttributes } from 'react';

import {
  TextAreaBlock,
  Label,
  InputTextArea
} from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextAreaBlock>
      <Label htmlFor={name}>{label}</Label>
      <InputTextArea id={name} {...rest} />
    </TextAreaBlock>
  );
}

export default Textarea;