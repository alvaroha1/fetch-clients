import React from 'react'
import { Box, CardBody, Image, Name, Text } from "../styles/ResultCard";

export default function ResultCard(props) {
  const { name, city, imgSrc, specialty } = props;
  return (
    <Box>
      <CardBody>
        <Name>👤{name}</Name>
        <Text>🏠 {city}</Text>
        <Text>🏗 {specialty}</Text>
      </CardBody>

      <Image
        src={imgSrc}
        alt={name} />
    </Box>
  )
}