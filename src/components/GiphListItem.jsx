import React from 'react'
import Card from 'react-bootstrap'

export default function GiphListItem({ gif }) {
  return (
    <div className='gifCard'>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p className='gifTitle'>{gif.title}</p>
      </div>
  )
}
