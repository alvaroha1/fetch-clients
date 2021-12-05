import React from 'react'
import { Box, CardBody, Image } from "../styles/ResultCard";

export default function ResultCard(props) {
  const { name, city, imgSrc, specialty } = props;
  return (
    <Box>
      <CardBody>
        <span>Company Name:{name}</span>
        <span>From: {city}</span>
        <span>Specialty: {specialty}</span>
      </CardBody>

      <Image
        src={imgSrc}
        alt={name} />
    </Box>
  )
}