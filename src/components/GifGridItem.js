import React from 'react'


//este componente le da forma de tarjeta a las imagenes o items
export const GifGridItem = ({img}) => {
  
    return (
    <div className='card animate__animated animate__bounceIn '>
      
        <img src={img.url} alt={img.title} />
        <p>{img.title}</p>
    </div>
  )
}
