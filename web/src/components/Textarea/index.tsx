import React, {TextareaHTMLAttributes} from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string;
  label: string;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({label, name, ...rest}) => {
  return (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name}{...rest}/>
  </div>
);
  
}

export default Textarea;