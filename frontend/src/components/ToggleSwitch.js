import React from 'react'
import { Label, Input, Slider, Box } from "../styles/ToggleSwitch";

export default function ToggleSwitch(props) {
  const {   value,
    checked,
    onChange,
    name,
    id,
    disabled,
    title,
    size } = props;
  return (
    <Box>
    <Label htmlFor={id} disabled={disabled} title={title} size={size}>
    <Input
      id={id}
      type="checkbox"
      name={name}
      value={value}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
    />
    <Slider />
      </Label>
      <span>{title}</span>
    </Box>


  )
}