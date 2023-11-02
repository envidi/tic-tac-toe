import React from 'react'

function Log({turns}) {
  return (
    <ul>
        {turns.map(turn=>{
            return (
                <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
            )
        })}

    </ul>
  )
}

export default Log