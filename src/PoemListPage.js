import React from 'react'
import { Link } from 'react-router-dom'
import POEMS from './poems'

export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className='PoemList'>
        {POEMS.map(poem =>
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>
              {poem.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
