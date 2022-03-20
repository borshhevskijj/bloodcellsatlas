import React from 'react';
import cl from './HomePageText.module.css'

export default function HomePageText(props) {

    

    return  <section className={cl.anyText}>

                <h1>{props.h1}</h1>
                <div className={cl.img_text}>
                    <img src={props.img} align={props.align} style={props.style} alt=""/>
                    <p>{props.p} </p>
                </div>
            </section>
            


}
