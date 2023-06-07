import React from 'react'
import { Anchor, Image } from './style.js'

const DEFAULT_IMAGE = 'https://pbs.twimg.com/ext_tw_video_thumb/1613975088348688385/pu/img/WWCe8RcTq1Q-0bNX.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
