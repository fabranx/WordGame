import { Button, Container } from "react-bootstrap"


function EndGame({points, consecutivePoints, maxConsecutiveWord, time, newGame}) {

  return (
    <Container className="d-flex align-items-center mt-5 flex-column gap-3">
      <h2>TIME UP !</h2>
      <h3 className="text-center">Typing Speed <span className="fs-5">(for corrected characters)</span>: {points > 0 ? `${points/(time/1000)}`.slice(0,4) : 0} ch/s</h3>
      <h3 className="text-center">Max words in a row: {maxConsecutiveWord}</h3>
      <h3 className="text-center">Bonus Points: {consecutivePoints}</h3>
      <span className="d-flex gap-1 text-center">
        <h2 className="mx-2 ">Your Score:</h2>
        <h2 className="fw-bold text-warning">{points+consecutivePoints} pts</h2>
      </span>
      <Button variant="outline-info" onClick={newGame}>New Game</Button>
    </Container>
  )
}

export default EndGame