import React from 'react'
import { useState, useEffect } from 'react'
import { allCells } from '../../datacells/datacell'
import Accordion from './accordion'
import cl from './HomePage.module.css'

import { smthAbouteBlood,aboutСellFormation,aboutPlateles,aboutLeuco,aboutErythro,} from './../../datacells/textSection';
import HomePageText from '../HomePageText'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'
import RemoveButton from './RemoveButton'


const [width, height,align,fullScreen] = [16,32,1,100]

const allCellsNames = allCells.map(cells => cells.name)
const randomAllCellsNamesIndex = Math.floor(Math.random() * allCellsNames.length) // получает случайное индекс массива с названиями клеток


export default function HomePage () {

    const [cellsName, setCellsName] = useState([])
    const [inputValue, setInputValue] = useState(`${allCellsNames[randomAllCellsNamesIndex].toLowerCase()}`)//инициализирует начальное значение инпута случайной клеткой 

    
    useEffect(() => {
        inputValue.length 
        ? setCellsName(allCells) 
        : setCellsName([])
    }, [inputValue]);

    const filtredCells = cellsName.filter(item => { 
         return item.name.toLowerCase().includes(inputValue.toLowerCase())  
    })

    // const removeButton = () => {
    //     cellsName 
    //         ? setCellsName([]) || setInputValue('') //обнуляет состояния,во избежание мелькания массива с клетками при нажатии на кнопку "Х"
    //         : <p className={cl.notFound}>Произошла ошибка, перезагрузите страницу</p>
    //     }
     
    return (

    <div className={cl.container}>
        <div className={cl.containerHomePageText}>
            <HomePageText 
                h1={smthAbouteBlood.h1}
                p={smthAbouteBlood.p} 
                img={smthAbouteBlood.img}
                style={{marginRight: align + `em`, width: height +'em',height: width + 'em'}} //горизонтальное расположение или вертикальное
                align='left' // фото слева или справа
                />
            <HomePageText 
                h1={aboutСellFormation.h1} 
                p={aboutСellFormation.p} 
                img={aboutСellFormation.img} 
                style={{marginLeft: align + `em`, width: height +'em',height: width + 'em'}}
                align='right'
            />
            <HomePageText 
                h1={aboutErythro.h1} 
                p={aboutErythro.p} 
                img={aboutErythro.img} 
                style={{marginRight: align + `em`, width: width +'em',height: height + 'em'}} 
                align='left'
            />
            <HomePageText 
                h1={aboutLeuco.h1} 
                p={aboutLeuco.p} 
                img={aboutLeuco.img} 
                style={{marginLeft: align + `em`, width: width +'em',height: height + 'em', }} 
                align='right'
            />
            <HomePageText 
                h1={aboutPlateles.h1} 
                p={aboutPlateles.p} 
                img={aboutPlateles.img} 
                style={{marginRight: align + `em`, width: fullScreen +'%',height: width + 'em'}}
                align='left'
            />
        </div>
       <section className={cl.countainer_Search}>
            <div className={cl.container_input}>
                   
                    <input
                    required
                    id='input'
                    className={cl.input}
                    type="text"
                    list='auto_complete'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    spellCheck={false}
                    />  
                    <label for='input'>поиск клеток...</label>
                <SearchTwoToneIcon className={cl.iconSearch}/>
                <RemoveButton className={inputValue ? cl.removeBtnActive : cl.removeBtn } resetCellsName={setCellsName} removeInputValue={setInputValue} />   


                <datalist id='auto_complete' >
                    {
                    allCells.map((item) =>
                        <option key={item.id} value={item.name.toLowerCase()}></option>
                    )}
                </datalist>
            </div>
            

            <div className={cl.container_accordion}>
                {
                filtredCells.length || !inputValue 
               ? (filtredCells.map ((item)=>{ 
                return (
                    <Accordion 
                    key = {item.id}
                    name =  {item.name.toLowerCase()}
                    size={item.size} 
                    cytoplasm={item.cytoplasm}
                    localization={item.localization}
                    function={item.function}
                    images= {item.image}
                    avatar = {item.avatar}
                    />
                )
                }))
               : <p className={cl.notFound}>НИЧЕГО НЕ НАЙДЕНО</p>
                }
            </div>
        </section>
    </div>
   
        )
        
    
}
