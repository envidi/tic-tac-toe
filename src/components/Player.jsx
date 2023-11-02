import React from 'react'
import { useState } from 'react'
import '../App.css'

function Player({name , symbol,active,onChangeName}) {
    const [isEdit,setIsEdit] = useState(false)
    const [nameDefault,setNameDefault] = useState(name)
    const info = (
        <div className={`player ${active ? 'active':''}`}>          
            <span className='player-name'>{nameDefault}-</span>
            <span className='player-symbol'>{symbol}</span>
        </div>
    )

    const handleEdit = ()=>{
        setIsEdit(!isEdit)
        if(isEdit){
            onChangeName(symbol,nameDefault)
        }
    }

    const handleChange = (e)=>{
        const target = e.target
        const value = target.value
        setNameDefault(value)
        
    }

  return (
    <li >
       {!isEdit ? info : <input type='text' value={nameDefault} onChange={handleChange}/> }
        <button className='edit' onClick={handleEdit}>{isEdit?"Save":"Edit"}</button>
    </li>
  ) 
}

export default Player