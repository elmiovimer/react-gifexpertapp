//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
 import { useFetchGifs } from '../hooks/useFetchGifs';
 import { GifGridItem } from './GifGridItem';
 import '../css/loader.css';
 


 //este componente obtiene las imagenes y las renderiza o postea
export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);

  return (
   <>
    <h3>{category}</h3>
    {loading ?  <h1>
    <span class="let1">l</span>  
    <span class="let2">o</span>  
    <span class="let3">a</span>  
    <span class="let4">d</span>  
    <span class="let5">i</span>  
    <span class="let6">n</span>  
    <span class="let7">g</span>  
  </h1> : null }
  
        <div className='card-grid'>
        
            
            
                {
                    // images.map(img => (
                    //     <li key={img.id}>{img.title}</li>
                    // ))

                    images.map((img) => (
                        <GifGridItem 
                        key={img.id}
                        img = {img}
                        /> 
                    ))
                }

            
            
        </div>
   </>
  )
}
