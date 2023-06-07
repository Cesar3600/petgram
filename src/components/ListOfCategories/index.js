import React, { useState, useEffect } from 'react'

import { Category } from '../Category/index.js'
import { List, Item } from './style.js'
import db from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    setCategories(db.categories)
    console.log('primer effecto')
  }, [])

  useEffect(() => {
    console.log('segundo effecto')
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    console.log('unmount')
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    console.log('renderList')
    return (
      <List className={fixed ? 'fixed' : ''}>
        {
        categories.map(category => {
          return (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
        })
      }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
