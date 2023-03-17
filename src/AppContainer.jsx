import Timer from './components/Timer';
import App from './App';
import { useState } from 'react';
import EndGame from './components/EndGame';
import { Button, Container } from 'react-bootstrap';

function AppContainer() {

  const time = 90000  // milliseconds
  const [isTimeUp, setIsTimeUp] = useState(false)
  const [points, setPoints] = useState(0)
  const [canPlay, setCanPlay] = useState(false)
  const [canGetBonus, setCanGetBonus] = useState(true)
  const [consecutivePoints, setConsecutivePoints] = useState(0)
  const [countConsecutive, setCountConsecutive] = useState(0)
  const [maxConsecutiveWord, setMaxConsecutiveWords] = useState(0)


  function newGame() {
    setCanPlay(true)
    setIsTimeUp(false)
    setPoints(0)
    setConsecutivePoints(0)
    setCountConsecutive(0)
    setMaxConsecutiveWords(0)
  }


  return(
    <>
      {canPlay ? (
        <>
          <Timer isTimeUp={isTimeUp} setIsTimeUp={setIsTimeUp} time={time}/>
          {isTimeUp ? (
            <EndGame 
              points={points}
              consecutivePoints={consecutivePoints} 
              maxConsecutiveWord={maxConsecutiveWord} 
              time={time}
              newGame={newGame}
            />
          ) : (
            <>
            <App 
              points={points} 
              setPoints={setPoints} 
              canGetBonus={canGetBonus}
              setCanGetBonus={setCanGetBonus} 
              consecutivePoints={consecutivePoints}
              setConsecutivePoints={setConsecutivePoints}
              countConsecutive={countConsecutive}
              setCountConsecutive={setCountConsecutive}
              maxConsecutiveWord={maxConsecutiveWord}
              setMaxConsecutiveWords={setMaxConsecutiveWords}
            />
          </>

          )
          }
        </>
      ) : (
        <Container className='d-flex align-items-center mt-5 flex-column gap-3 px-5'>
          <h1 className='fs-1 fw-bold fst-italic mt-3 text-info bg-success bg-opacity-25 border border-2 rounded-4 border-primary w-75 text-center py-3'>WordGame</h1>
          <Button variant='success' size='lg' className='w-50 py-2' onClick={newGame}>Start</Button>
        </Container>
      )}

    </>
  )
}

export default AppContainer