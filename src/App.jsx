import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import WINNING_COMBINATIONS from './winning-combination'
import GameOver from './components/GameOver'

import './App.css'
import Log from './components/Log'

const arrBoardGame = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
const deriveGameTurn = (gameTurn)=>{
  let curPlayer = "X"
      
      if(gameTurn.length > 0 && gameTurn[0].player === "X"){
        
        curPlayer = "O"
      }
      return curPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [namePlayer, setNamePlayer] = useState(
    {
      X:"Player 1",
      O:"Player 2"
    }
  )
  const active = deriveGameTurn(gameTurns)
  
  let initialBoard = [...arrBoardGame.map(arr=>[...arr])]
  let winner 
  
  for(const turn of gameTurns){
    const {square,player} = turn
    const {row,col} = square
    initialBoard[row][col] = player
  }  

  for(const win of WINNING_COMBINATIONS){
   
   const firstSquareSymbol = initialBoard[win[0].row][win[0].column]
   const secondSquareSymbol = initialBoard[win[1].row][win[1].column]
   const thirdSquareSymbol = initialBoard[win[2].row][win[2].column]
   if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
      ){
      winner = namePlayer[firstSquareSymbol]
          
    }
  }
  let hasDraw = false
  if(gameTurns.length === 9){
    hasDraw = true
  }
  const handleActive = (rowId,colId)=>{
    
   
    setGameTurns(prev=>{     
      const curPlayer = deriveGameTurn(prev)           
      const updatedTurns = [
        
        { square: {
          row:rowId,
          col:colId
        },        
          player: curPlayer        
      },...prev
      ]           
      return updatedTurns
    })
  }

  const handleRestart = ()=>{
    setGameTurns([])
  }
  const handlePlayerNameChange = (symbol,newName)=>{
    setNamePlayer(prevPlayer=>{
      return {
        ...namePlayer,
         [symbol]:newName
      }
    })
  }

  return (
   <main>
    <div id="game-container">
      {(winner||hasDraw) && <GameOver winner={winner} onStart={handleRestart} />}
      <ul id="players">
        <Player name={namePlayer.X} symbol='X' active={active==='X'} onChangeName={handlePlayerNameChange} />
        <Player name={namePlayer.O} symbol='O' active={active==='O'} onChangeName={handlePlayerNameChange}/>
      </ul>
      <GameBoard activePlayerSymbol={active} turns={initialBoard} onSelectedSquare={handleActive} />
    <Log turns = {gameTurns}/>
    </div>
   </main>
  )
}

export default App
