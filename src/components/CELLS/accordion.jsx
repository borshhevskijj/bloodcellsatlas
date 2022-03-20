import  { useState, useRef } from "react"
import './accordion.css'


const Accordion = (props) => {
    const [setActive, setActiveState ] = useState('') ;
    const [height, setHeight] = useState('0px');
    const [isActive, setIsActive] = useState(false);
    const content = useRef(null);

    const toggleAccordion =() => {
        setActiveState(setActive === '' ? 'active' : '') // добавляет класс актив
        setHeight(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`) //получает текущую высоту аккордиона
        setIsActive(!isActive)
    }

    return (
        
        <div>
            
            <div className= {`accordion ${setActive}`} onClick={toggleAccordion}> 
               <div className="wrapper">
                    <div className="wrapper_title">
                    <img src={props.avatar} alt={props.name.toLowerCase()}/>
                    <h1 className="cell_name">{props.name.toLowerCase()}</h1>
                </div>
                   {isActive
                ? '-'
                : '+'
                }  
               </div>

            <section
                ref={content} 
                className='accordion_content'
                style={{maxHeight:`${height}`}}
            >
                <ul>
                    <li> {props.cytoplasm} </li>
                    <li> {props.size} </li>
                    <li> {props.localization} </li>
                    <li> {props.function} </li>
                    <li> {props.images}</li>
                   
                </ul>
            </section>
            </div>
        </div>
    )
}
export default Accordion;