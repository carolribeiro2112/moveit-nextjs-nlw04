import { useState, useEffect, useContext } from 'react';
import { CountDownContext } from '../../contexts/CountdownContext';
import {CountdownContainer, Button, ButtonActive} from './styles';


export function Countdown () {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountDownContext)
 
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

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
      
      {hasFinished ? (
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