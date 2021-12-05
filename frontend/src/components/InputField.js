import React from 'react'
import { Input } from "../styles/InputField";

export default function InputField(props) {
  const { name, type, required, handleInput, placeholder } = props;
  return (
    <div>
        <Input placeholder={placeholder} name={name} type={type} required={required} onChange={handleInput} />
    </div>
  )
}