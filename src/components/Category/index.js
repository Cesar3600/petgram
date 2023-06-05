import React from 'react'
import { Image } from './styles.js'

const DEFAULT = 'https://i2-prod.dailystar.co.uk/incoming/article27328720.ece/ALTERNATES/s615b/0_he-mysterious-case-of-Skinny-Bob-the-alien-captured-by-the-KGB.jpg'

export const Category = ({ cover = DEFAULT }) => {
  return (
    <Image src={cover} />
  )
}
