import React from 'react';
import style from './Recepies.module.css'
const Recepi = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recepies}>
        <h1>{title}</h1>
        <p>{calories}</p>
        <ol>
        {ingredients.map(ingredient => (
            <li>
            {ingredient.text}
            </li>
        ))}
        </ol>
        <img className={style.images} src={image} alt=""/>
        </div>
    )
}

export default Recepi;