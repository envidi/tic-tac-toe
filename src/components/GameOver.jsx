import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GameOver({winner,onStart}) {

    const [show , setShow ] = useState('block')
    const handleClose = ()=>{
        setShow('none')
    }
    const handleRestart = ()=>{
        onStart()
    }
  return (
    <div
      className="modal "
      style={{ display: `${show}`, position: 'absolute' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>

        {
            winner && <Modal.Body>
            <p>You win {winner}</p>
          </Modal.Body>
        }
        {
            !winner && <Modal.Body>
            <p>Draw</p>
          </Modal.Body>
        }

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleRestart}>Restart</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default GameOver