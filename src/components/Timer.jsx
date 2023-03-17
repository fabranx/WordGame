import { useState, useEffect } from "react"
import { Container } from "react-bootstrap";
import Countdown from 'react-countdown';


function Timer({isTimeUp, setIsTimeUp, time}) {
  
  const [data, setData] = useState(Date.now() + time)
  useEffect(() => {
    setData(Date.now() + time)
  }, [isTimeUp])

 
  return (
    <>
    {isTimeUp ? null : (
      <Countdown 
        date={data}
        onComplete={() => setIsTimeUp(true)}
        renderer={(props) => (
          <Container className="d-flex justify-content-center">
            <h1 className="fs-1 fw-bold shadow p-3 mb-2">
              {('0' + props.minutes).slice(-2)}:{('0' + props.seconds).slice(-2)}
            </h1> 
          </Container>
        )}
      />
    )}
    </>
  )

}


export default Timer