import Key from "./Key"
import { Container } from "react-bootstrap"
import './Keyboard.css'

function Keyboard({pressedKey, handleKeyPressed, keyPressedControl}){
  const words = [
                  ['q','w','e','r','t','y','u','i','o','p'],
                  ['a','s','d','f','g','h','j','k','l'],
                  ['z','x','c','v','b','n','m']
                ]
  
  return(
    <Container className="keyboard">
      {words.map((line, i) => (
        <div key={i} className="d-flex justify-content-center">
        {line.map(word => (
          <Key 
            key={word} 
            word={word} 
            handleKeyPressed={handleKeyPressed} 
            pressedKey={pressedKey} 
            keyPressedControl={keyPressedControl}
          />
        ))}
      </div>
      ))}
    </Container>
  )
}

export default Keyboard