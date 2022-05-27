import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//componente principal

export const GifExppertApp = () => {
    
    const [categories, setCagetories] = useState(['One Punch']);
    
  
  
  
  
    return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories = {setCagetories}/>

        <hr />
        <ol>
            {
                categories.map(category => {
                    return <GifGrid
                    key={category} 
                    category = {category}
                    />
                })
            
            }
        </ol>
    </>
    
  )
}
