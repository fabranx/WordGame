import './Key.css'
import { useEffect, useState, useRef } from 'react'

function Key({word, handleKeyPressed, pressedKey, keyPressedControl}){

  const keyRef = useRef(null)
  const [wordkey, setWordKey] = useState(null) 

  useEffect(() => {
    setWordKey(keyRef.current)
  }, [])

  useEffect(() => {
    if(pressedKey === word) {
      wordkey.classList.add('active')
      setTimeout(() => {
        wordkey.classList.remove('active')
      }, 100)
    }

  }, [keyPressedControl])

  return (
    <div ref={keyRef} className="wordkey" onClick={(e) => handleKeyPressed(e.target.innerText)}>
      {word}
    </div>
  )
}

export default Key