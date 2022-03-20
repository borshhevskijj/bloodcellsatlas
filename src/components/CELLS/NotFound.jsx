import React from 'react';
import { Link } from 'react-router-dom';
import cl from './notFound.module.css'
// import svg from '../../datacells/images/backgroundImg/404page.svg'
import svg from '../../datacells/images/backgroundImg/404page01.svg'
// import svg from '../../datacells/images/backgroundImg/erythrocytes.JPG'
// import { useRef,useState } from 'react';

export default function NotFound() {
    



    return (

        <div
        className={cl.wrapper}
        >
            <div className={cl.svgBg}>
                <img 
                    src={svg} 
                    alt='blobs background'/>
                </div>

            <div className={cl.redirectTo}>
               <p> Page not found. Go to <Link to='/'>home page</Link> </p>
            </div>
            
        </div>
    )
}
