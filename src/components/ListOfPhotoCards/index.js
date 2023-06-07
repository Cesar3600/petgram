import React from 'react'
import data from '../../../api/db.json'
import { PhotoCard } from '../PhotoCard/index.js'
export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        data.photos.map(photo => {
          return (
            <li key={photo.id}>
              <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
            </li>
          )
        })

      }
    </ul>
  )
}
