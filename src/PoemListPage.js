import React from 'react'
import POEMS from './poems'

export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className='PoemList'>
        {POEMS.map(poem =>
          <li key={poem.id}>
            <a href={`/poem/${poem.id}`}>
              {poem.title}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}
