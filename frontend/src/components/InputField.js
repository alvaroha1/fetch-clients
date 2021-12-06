import React from 'react'
import { Input, Box } from "../styles/InputField";

export default function InputField(props) {
  const { name, type, required, handleInput, placeholder } = props;
  return (
    <Box>
        <Input placeholder={placeholder} name={name} type={type} required={required} onChange={handleInput} />
    </Box>
  )
}