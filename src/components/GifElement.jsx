import React from 'react'

export const GifElement = ({title, url}) => {
  return (
    <div className='card'> 
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
