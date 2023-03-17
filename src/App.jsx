import { useState, useEffect } from 'react'
import Keyboard from './components/Keyboard/Keyboard';
import Word from './components/Word';
import fetchNewWord from './words';


function App({
  points,
  setPoints,
  setConsecutivePoints,
  consecutivePoints,
  setCanGetBonus,
  canGetBonus,
  countConsecutive,
  setCountConsecutive,
  maxConsecutiveWord,
  setMaxConsecutiveWords
}) {

  const [pressedKey, setPressedKey] = useState('')
  const [keyPressedControl, setKeyPressedControl] = useState(true)  // to force re render when new key is pressed 

  const [word, setWord] = useState(fetchNewWord())
  const [index, setIndex] = useState(0)
  const [completedWord, setCompletedWord] = useState(false)

  const [isKeyError, setKeyError] = useState(false)

  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z', 'x', 'y', 'w', 'j', 'k'];


  useEffect(() => {
    function handleKeyDown(e){
      if(alphabet.includes(e.key))
      {
        handleKeyPressed(e.key)  
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return (() => document.removeEventListener('keydown', handleKeyDown))
  }, [])

  function handleKeyPressed(key) {
    navigator.vibrate(60)
    setPressedKey(key)
    setKeyPressedControl(prev => !prev)
  }

  useEffect(() => {
    const splittedWord = word.split('')
    if(pressedKey != ''){
      if(pressedKey === splittedWord[index]){
        if(index === word.length-1) {
          setCompletedWord(true)
        }
        setPoints(points => points +1)
        setIndex(index => index + 1)
        setKeyError(false)
      }
      else {
        setPoints(points => points -1 )
        setKeyError(true)
        setCanGetBonus(false)
        setCountConsecutive(0)
      }
    }
    
  }, [keyPressedControl])


  useEffect(() => {
    if(completedWord === true)
    {
      let nw = fetchNewWord()
      setWord(nw)
      setIndex(0)
      setCompletedWord(false)
      if(canGetBonus){
        setCountConsecutive(count => count + 1)
      }
      setCanGetBonus(true)
    }
  }, [completedWord])


  useEffect(() => {
    if(countConsecutive >= 2){
      setConsecutivePoints(c_points => c_points + Math.floor(countConsecutive/2))
    }
    if(countConsecutive > maxConsecutiveWord){
      setMaxConsecutiveWords(countConsecutive)
    }
  }, [countConsecutive])



  return (
    <>
     <div>
      <div className='d-flex justify-content-around flex-wrap'>
        <div className='d-flex align-items-center gap-3'>
          <h3 className='fs-1'>{countConsecutive}</h3>
          <h3 className='fs-3'>In a Row</h3>
        </div>
        <div  className='d-flex align-items-center gap-3'>
          <h3 className='fs-3'>Bonus Points</h3>
          <h3 className='fs-1'>{consecutivePoints}</h3>
        </div>
      </div>
      <h1 className='text-center fw-bold' style={{fontSize:'2.5em'}}>{points}</h1>
      <Word word={word} count={index} isKeyError={isKeyError}></Word>
      <div className='d-flex justify-content-center flex-wrap'>
        <Keyboard 
          pressedKey={pressedKey} 
          handleKeyPressed={handleKeyPressed} 
          keyPressedControl={keyPressedControl}
        />
      </div>
    </div>
    </>

  )
}

export default App
