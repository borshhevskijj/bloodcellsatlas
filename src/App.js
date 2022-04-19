import React from 'react'
import {  Route,  Routes  } from 'react-router-dom'
import HomePage from './components/CELLS/HomePage'
import NotFound from './components/CELLS/NotFound'



import NavBar from './components/CELLS/NavBar'
import Accordion from './components/CELLS/accordion'
import Loading from './components/CELLS/Loading'
import { Suspense } from 'react'



export const maped = (CellsArr) => CellsArr.map((item) => 

  <Accordion 
    key = {item.id}
    name =  {item.name}
    size={item.size} 
    cytoplasm={item.cytoplasm}
    localization={item.localization}
    function={item.function}
    images= {item.image}
    avatar = {item.avatar}
    />
    )


   
    
 
export default function App() {

    const Lymphopoiesis = React.lazy(()=> import ('./components/CELLS/Lymphopoiesis'))
    const Monopoiesis = React.lazy(()=> import ('./components/CELLS/Monopoiesis'))
    const Erythropoiesis = React.lazy(()=> import ('./components/CELLS/Erythropoiesis'))
    const Megakarypoiesis = React.lazy(()=> import ('./components/CELLS/Megakarypoiesis'))
    const Myelopoiesis = React.lazy(()=> import ('./components/CELLS/Myelopoiesis'))
  
  return (
    
    <div className="App">
        
<NavBar/>


    <Routes>
      <Route path='/' element = { <HomePage/> }/>

      <Route path='/myelopoiesis' element = {
        <Suspense fallback={<Loading/>}>
          <Myelopoiesis/>
        </Suspense>}/>

      <Route path='/lymphopoiesis' element = { 
            <Suspense fallback={<Loading/>}>
              <Lymphopoiesis/>
            </Suspense>}/>

      <Route path='/monopoiesis' element = {
        <Suspense fallback={<Loading/>}>
         <Monopoiesis/>
      </Suspense>}/>
       
      <Route path='/erythropoiesis' element = {
        <Suspense fallback={<Loading/>}>
       <Erythropoiesis/>
     </Suspense>}/>
     
      <Route path='/lymphopoiesis' element = {
        <Suspense fallback={<Loading/>}>
        <Lymphopoiesis/>
      </Suspense>}/>
        
      
      <Route path='/megakarypoiesis' element = { 
      <Suspense fallback={<Loading/>}>
        <Megakarypoiesis/>
      </Suspense>}/>

      <Route path='*' element = {<NotFound/>}/>
   

    </Routes> 

    </div>

  );
}
