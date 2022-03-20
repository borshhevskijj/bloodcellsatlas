import React from 'react'
import  CancelOutlinedIcon  from '@mui/icons-material/CancelOutlined';

export default function RemoveButton(props) {

    const removeButton = (resetCellsName,removeInputValue)=>{
      resetCellsName([])|| removeInputValue('')
    }

  return (
    <button className={props.className}
    onClick={() => removeButton(props.resetCellsName,props.removeInputValue)}
    >
    <CancelOutlinedIcon/> 
    </button>
    )
}
