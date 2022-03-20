import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../../styles/App.css'
import { NavLink } from 'react-router-dom';




export default function SearchAppBar() {


  return (
    <Box 
    className='navbar'
    sx={{ flexGrow: 1}}>
      <AppBar 
      className='APPBAR'
      position="static">
        <Toolbar >
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
               > 

            <NavLink className='navbar_link' to="/"> Главная </NavLink>
            <NavLink className='navbar_link' to="/lymphopoiesis"> Лимфопоез </NavLink >
            <NavLink className='navbar_link' to="/myelopoiesis"> Миелопоез </NavLink >
            <NavLink className='navbar_link' to="/monopoiesis"> Монопоез </NavLink >
            <NavLink className='navbar_link' to="/erythropoiesis"> Эритропоез </NavLink >
            <NavLink className='navbar_link' to="/megakarypoiesis"> Мегакариопоез </NavLink >
            
            
            
           


          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}