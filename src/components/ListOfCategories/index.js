import React from 'react'
import { Category } from '../Category/index.js'

export const ListOfCategories = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(el => <li key={el}><Category /></li>)
      }
    </ul>

  )
}
