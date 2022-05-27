import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

//este componente es el input value de la pagina. la hacer clic dentro del inputtext devuelve el valor al componente
//donde este fue llamado
export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e)=>{
        setinputValue(e.target.value);



    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats,]);
            setinputValue('');

        }
        

    }


    
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
             placeholder={"insert category"}

        />


    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

