import { useState, useEffect } from 'react';
import {CountdownContainer, Button, ButtonActive} from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown () {
  const [time, setTime] = useState(25*60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = (time%60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25*60);
  }

  useEffect(()=>{
    if(isActive && time > 0){
      countdownTimeout = setTimeout(()=>{
        setTime(time-1);
      }, 1000)
    } else if (isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
    }
  },[isActive, time])

  return(
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </CountdownContainer>
      
      {
        hasFinished ? (
          <Button disabled>
            Ciclo encerrado
          </Button>
        ):(
          <>
            {
              isActive ? (
              <ButtonActive 
                onClick={resetCountdown}
                >Abandonar ciclo
              </ButtonActive>) : (
              <Button 
                onClick={startCountdown}
                >Iniciar um ciclo
              </Button>)
            }
          </>
        )
      }
      
      
    
        
    
    </div>
  );
}