import { Container } from 'react-bootstrap'
import './Word.css'

function Word({word, count, isKeyError}) {
  return (
    <Container className="text-center py-3 bg-light bg-opacity-25 border border-success rounded-4 w-100 mb-5">
      {word.split('').map((ch, i) => {
        if(isKeyError && i === count) {
          return <span key={ch+i} className="word error">{ch}</span>
        }
        return <span key={ch+i} className={i<count ? "word success" : "word"}>{ch}</span>
      })}
    </Container>
  )
}

export default Word