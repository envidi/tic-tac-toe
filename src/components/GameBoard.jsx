import React from 'react'
import { useState } from 'react'
import '../App.css'



function GameBoard({onSelectedSquare,activePlayerSymbol,turns}) {
    

    

    const handleSelectSquare = (rowId, playerSymbolId)=>{
        setBoardGame((prevBoardGame)=>{
            const newBoardGame = [...prevBoardGame.map(innerBoard=>[...innerBoard])]         
            newBoardGame[rowId][playerSymbolId] = activePlayerSymbol
            return newBoardGame
        })
        // onSelectedSquare(rowId,playerSymbolId)
    }
    return (
    <div className='container-gameBoard'>
        {
            turns.map((row,rowIndex)=>(
                <div key={rowIndex} className='squares'>
                    {
                        row.map((playerSymbol,colIndex)=>(
                            <button disabled={playerSymbol !== null} key={colIndex} onClick={()=>onSelectedSquare(rowIndex,colIndex)} className='squareItem'>{playerSymbol}</button>
                        ))
                    }
                </div>
            ))
        }
       
      
       
       
    </div>
  )
}

export default GameBoard