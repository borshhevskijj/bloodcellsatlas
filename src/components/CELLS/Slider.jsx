import React from 'react'
import cl from './slider.module.css'



export default function Slider(props) {
   
    return (
        <div className = {cl.wrapper}>
          {props.arr.slice(0,-1).map(img => 
              <img 
              key={img}
              id={img} 
              className={cl.images} 
              src={img} 
              // alt={props.arr.at(-1)} 
              alt=''
              /> )}
        </div>
    )
}
 
