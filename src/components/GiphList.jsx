import React from 'react'
import GiphListItem from '../components/GiphListItem'

export default function GiphList({ gifs }) {
  return (
        <div>
      {gifs.map((gif) => (
        <GiphListItem key={gif.id} gif={gif} />
      ))}
    </div>
  )
}